'use client';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/lib/axios';

const HEADING_TEXT = 'Document Management Systems';
const ERROR_MESSAGE = 'Failed to load documents';
const EMPTY_MESSAGE = 'No documents available';
const LOADING_TEXT = 'Loading documents...';
const NOT_UPLOADED_TEXT = 'Not uploaded';
const QUERY_KEY_SHAREHOLDER_DOCUMENTS = 'kyc-shareholder-documents';
const DATE_LOCALE = 'en-US';
const FILE_PATH_SEPARATOR = '/';
const DOCUMENT_TYPE_LABELS = {
  passport_copy: 'Passport Copy',
  emirates_id: 'Emirates ID',
  residence_visa: 'Residence Visa',
} as const;

const DATE_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
};

const FILE_ICON_COLORS = {
  HAS_FILE: '#16a34a',
  MISSING_FILE: '#9ca3af',
} as const;

const getFileName = (filePath: string | null) => {
  if (!filePath) {
    return NOT_UPLOADED_TEXT;
  }

  const segments = filePath.split(FILE_PATH_SEPARATOR).filter(Boolean);
  return segments[segments.length - 1] || NOT_UPLOADED_TEXT;
};

const formatDate = (dateValue: string) => {
  const parsedDate = new Date(dateValue);
  if (Number.isNaN(parsedDate.getTime())) {
    return NOT_UPLOADED_TEXT;
  }

  return parsedDate.toLocaleDateString(DATE_LOCALE, DATE_FORMAT_OPTIONS);
};

const buildDisplayName = (document: ShareholderDocument) => {
  const fileName = getFileName(document.filePath);
  return `${document.shareholderName} - ${
    DOCUMENT_TYPE_LABELS[document.documentType]
  } - ${fileName}`;
};

const buildLastUpdated = (document: ShareholderDocument) => {
  return formatDate(document.createdAt);
};

function FileRow({ file }: { file: DocumentListItem }) {
  const iconColor = file.hasFile
    ? FILE_ICON_COLORS.HAS_FILE
    : FILE_ICON_COLORS.MISSING_FILE;

  return (
    <div className="flex items-center justify-between p-2.5 border-b border-[#7a7a7a] bg-white">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          className="w-6 h-6 border border-[#7a7a7a] rounded-[2px]"
        />
        <div
          className="w-8 h-8 rounded flex items-center justify-center"
          style={{ backgroundColor: iconColor }}
        >
          <svg
            width="15"
            height="20"
            viewBox="0 0 15 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.375 0H1.875C0.839844 0 0 0.839844 0 1.875V18.125C0 19.1602 0.839844 20 1.875 20H13.125C14.1602 20 15 19.1602 15 18.125V5.625L9.375 0Z"
              fill="white"
            />
          </svg>
        </div>
        <span className="text-[12px] font-semibold text-black tracking-[0.12px]">
          {file.name}
        </span>
      </div>

      <div className="flex items-center gap-[140px]">
        <span className="text-[12px] text-[#676a7b] tracking-[0.12px]">
          {file.lastUpdated}
        </span>
        <button className="w-6 h-6">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"
              fill="#7a7a7a"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function DocumentManagement() {
  const params = useParams();
  const slug = params.client as string;

  const { data, isLoading, isError } = useQuery<ShareholderDocumentsResponse>({
    queryKey: [QUERY_KEY_SHAREHOLDER_DOCUMENTS, slug],
    queryFn: async () => {
      const response = await axiosInstance.get(
        `/kyc/application/${slug}/shareholders`
      );
      return response.data;
    },
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="bg-white w-full p-4">
        <p className="text-[12px] text-[#676a7b]">{LOADING_TEXT}</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="bg-white w-full p-4">
        <p className="text-red-500 text-sm">{ERROR_MESSAGE}</p>
      </div>
    );
  }

  if (!data || data.documents.length === 0) {
    return (
      <div className="bg-white w-full p-4">
        <p className="text-[12px] text-[#676a7b]">{EMPTY_MESSAGE}</p>
      </div>
    );
  }

  const files: DocumentListItem[] = data.documents.map((document) => ({
    id: document.id,
    name: buildDisplayName(document),
    lastUpdated: buildLastUpdated(document),
    hasFile: Boolean(document.filePath),
  }));

  return (
    <div className="bg-white w-full">
      <div className="bg-[#f4f6f8] p-4 flex items-center justify-between">
        <h1 className="text-[18px] font-bold text-[#010623] leading-[24px]">
          {HEADING_TEXT}
        </h1>
      </div>

      <div className="p-4">
        <div>
          {files.map((file) => (
            <FileRow key={file.id} file={file} />
          ))}
        </div>
      </div>
    </div>
  );
}
