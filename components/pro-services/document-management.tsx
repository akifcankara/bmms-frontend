'use client';
const HEADING_TEXT = 'Document Management Systems';
const FILE_SIZE = '10 GB';
const FILE_DATE = '02.06.2024';

interface FileItem {
  id: string;
  name: string;
  type: 'folder' | 'image' | 'excel';
  size: string;
  lastUpdated: string;
}

function FileRow({ file }: { file: FileItem }) {
  const getFileIcon = () => {
    if (file.type === 'folder') {
      return (
        <svg
          width="32"
          height="28"
          viewBox="0 0 32 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.8 4.8H14.4L11.2 1.6C10.88 1.28 10.4 1.12 9.92 1.12H3.2C1.44 1.12 0 2.56 0 4.32V23.68C0 25.44 1.44 26.88 3.2 26.88H28.8C30.56 26.88 32 25.44 32 23.68V8C32 6.24 30.56 4.8 28.8 4.8Z"
            fill="#FFA726"
          />
        </svg>
      );
    }
    if (file.type === 'image') {
      return (
        <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 0H1C0.45 0 0 0.45 0 1V19C0 19.55 0.45 20 1 20H19C19.55 20 20 19.55 20 19V1C20 0.45 19.55 0 19 0ZM6 5C6.83 5 7.5 5.67 7.5 6.5C7.5 7.33 6.83 8 6 8C5.17 8 4.5 7.33 4.5 6.5C4.5 5.67 5.17 5 6 5ZM16 16H4V14L7 11L9 13L13 9L16 12V16Z"
              fill="white"
            />
          </svg>
        </div>
      );
    }
    return (
      <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
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
    );
  };

  return (
    <div className="flex items-center justify-between p-2.5 border-b border-[#7a7a7a] bg-white">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          className="w-6 h-6 border border-[#7a7a7a] rounded-[2px]"
        />
        {getFileIcon()}
        <span className="text-[12px] font-semibold text-black tracking-[0.12px]">
          {file.name}
        </span>
      </div>

      <div className="flex items-center gap-[140px]">
        <span className="text-[12px] text-[#676a7b] tracking-[0.12px] w-[52px]">
          {file.size}
        </span>
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
  const files: FileItem[] = [
    {
      id: '1',
      name: 'Folder Name',
      type: 'folder',
      size: FILE_SIZE,
      lastUpdated: FILE_DATE,
    },
    {
      id: '2',
      name: 'Folder Name',
      type: 'folder',
      size: FILE_SIZE,
      lastUpdated: FILE_DATE,
    },
    {
      id: '3',
      name: 'Folder Name',
      type: 'folder',
      size: FILE_SIZE,
      lastUpdated: FILE_DATE,
    },
    {
      id: '4',
      name: 'IMG.jpeg',
      type: 'image',
      size: FILE_SIZE,
      lastUpdated: FILE_DATE,
    },
    {
      id: '5',
      name: 'IMG.jpeg',
      type: 'image',
      size: FILE_SIZE,
      lastUpdated: FILE_DATE,
    },
    {
      id: '6',
      name: 'test.xlsx',
      type: 'excel',
      size: FILE_SIZE,
      lastUpdated: FILE_DATE,
    },
    {
      id: '7',
      name: 'test.xlsx',
      type: 'excel',
      size: FILE_SIZE,
      lastUpdated: FILE_DATE,
    },
    {
      id: '8',
      name: 'test.xlsx',
      type: 'excel',
      size: FILE_SIZE,
      lastUpdated: FILE_DATE,
    },
  ];

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
