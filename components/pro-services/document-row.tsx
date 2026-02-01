const FILE_ICON_COLORS = {
  HAS_FILE: '#16a34a',
  MISSING_FILE: '#9ca3af',
} as const;

const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL || '';
const URL_SEPARATOR = '/';

const buildFileUrl = (baseUrl: string, filePath: string) => {
  if (!baseUrl) {
    return filePath;
  }

  if (baseUrl.endsWith(URL_SEPARATOR) && filePath.startsWith(URL_SEPARATOR)) {
    return `${baseUrl}${filePath.slice(1)}`;
  }

  if (!baseUrl.endsWith(URL_SEPARATOR) && !filePath.startsWith(URL_SEPARATOR)) {
    return `${baseUrl}${URL_SEPARATOR}${filePath}`;
  }

  return `${baseUrl}${filePath}`;
};

export default function DocumentRow({ file }: { file: DocumentListItem }) {
  const iconColor = file.hasFile
    ? FILE_ICON_COLORS.HAS_FILE
    : FILE_ICON_COLORS.MISSING_FILE;
  const fileUrl =
    file.hasFile && file.filePath
      ? buildFileUrl(BASE_API_URL, file.filePath)
      : '';

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
        {fileUrl ? (
          <a
            href={fileUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[12px] font-semibold text-[#0f766e] tracking-[0.12px] hover:underline"
          >
            {file.name}
          </a>
        ) : (
          <span className="text-[12px] font-semibold text-black tracking-[0.12px]">
            {file.name}
          </span>
        )}
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
