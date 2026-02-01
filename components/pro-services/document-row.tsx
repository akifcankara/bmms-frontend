import DocumentFileIcon from '@/components/icons/document-file-icon';
import DocumentRowMenu from '@/components/icons/document-row-menu';

const FILE_ICON_COLORS = {
  HAS_FILE: '#16a34a',
  MISSING_FILE: '#9ca3af',
} as const;
const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL!;

export default function DocumentRow({ file }: { file: DocumentListItem }) {
  const iconColor = file.hasFile
    ? FILE_ICON_COLORS.HAS_FILE
    : FILE_ICON_COLORS.MISSING_FILE;
  const fileUrl =
    file.hasFile && file.filePath ? `${BASE_API_URL}${file.filePath}` : '';
  return (
    <div className="flex items-center justify-between p-2.5 border-b border-[#7a7a7a] bg-white">
      <div className="flex flex-wrap items-center gap-2">
        <div
          className="w-8 h-8 rounded flex items-center justify-center"
          style={{ backgroundColor: iconColor }}
        >
          <DocumentFileIcon />
        </div>
        {fileUrl ? (
          <a
            href={fileUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[12px] font-semibold text-[#0f766e] tracking-[0.12px] hover:underline truncate max-w-[200px]"
          >
            {file.name}
          </a>
        ) : (
          <span className="text-[12px] font-semibold text-black tracking-[0.12px]">
            {file.name}
          </span>
        )}
      </div>
    </div>
  );
}
