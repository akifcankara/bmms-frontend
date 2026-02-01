'use client';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/lib/axios';
import DocumentRow from './document-row';
import DocumentManagementSkeleton from './document-management-skeleton';

const HEADING_TEXT = 'Document Management Systems';
const ERROR_MESSAGE = 'Failed to load documents';
const EMPTY_MESSAGE = 'No documents available';
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
    return <DocumentManagementSkeleton />;
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
    filePath: document.filePath,
  }));

  return (
    <div className="bg-white w-full">
      <div className="bg-[#f4f6f8] p-4 flex flex-wrap gap-5 items-center justify-between">
        <h1 className="text-[18px] font-bold text-[#010623] leading-[24px]">
          {HEADING_TEXT}
        </h1>
      </div>

      <div className="p-4">
        <div>
          {files.map((file) => (
            <DocumentRow key={file.id} file={file} />
          ))}
        </div>
      </div>
    </div>
  );
}
