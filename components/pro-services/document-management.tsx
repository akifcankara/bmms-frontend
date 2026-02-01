'use client';
import { useState } from 'react';
import { Input } from '../ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

const HEADING_TEXT = 'Document Management Systems';
const SEARCH_PLACEHOLDER = 'Search files';
const BUTTON_NEW_TEXT = 'New';
const SORT_BY_TEXT = 'Sort by';
const SELECT_ALL_TEXT = 'Select all';
const COLUMN_SIZE = 'Size';
const COLUMN_LAST_UPDATED = 'Last Updated';

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

        <div className="flex items-center gap-4">
          <div className="relative">
            <Input
              placeholder={SEARCH_PLACEHOLDER}
              className="w-[373px] h-[42px] border-[rgba(1,6,35,0.1)] pl-10"
            />
            <svg
              className="absolute left-3 top-3"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.742 10.344C12.7103 9.02269 13.144 7.38449 12.9563 5.75713C12.7686 4.12977 11.9735 2.63199 10.7297 1.56267C9.48584 0.493353 7.88606 -0.0582469 6.2479 0.00677721C4.60974 0.0718013 3.05881 0.748124 1.90025 1.90668C0.741689 3.06524 0.0653667 4.61617 0.000342512 6.25433C-0.0646817 7.89249 0.487018 9.49227 1.55633 10.7361C2.62565 11.98 4.12343 12.775 5.75079 12.9627C7.37815 13.1504 9.01635 12.7167 10.3377 11.7484H10.3367C10.3667 11.7884 10.3987 11.8264 10.4337 11.8634L14.2927 15.7224C14.4799 15.9106 14.7342 16.0165 14.9996 16.0168C15.265 16.0171 15.5195 15.9118 15.7072 15.724C15.8948 15.5363 16.0001 15.2818 15.9998 15.0164C15.9995 14.751 15.8936 14.4967 15.7057 14.3094L11.8467 10.4504C11.8108 10.4146 11.7728 10.3809 11.7327 10.3494L11.742 10.344ZM12.0007 6.49943C12.0007 7.22165 11.8585 7.93682 11.5825 8.60388C11.3065 9.27094 10.9019 9.87705 10.3921 10.3869C9.88227 10.8967 9.27616 11.3012 8.6091 11.5772C7.94204 11.8532 7.22687 11.9954 6.50465 11.9954C5.78244 11.9954 5.06726 11.8532 4.4002 11.5772C3.73315 11.3012 3.12704 10.8967 2.61719 10.3869C2.10735 9.87705 1.70279 9.27094 1.42679 8.60388C1.15079 7.93682 1.00861 7.22165 1.00861 6.49943C1.00861 5.03989 1.58793 3.64007 2.61719 2.61081C3.64645 1.58155 5.04627 1.00223 6.50581 1.00223C7.96535 1.00223 9.36517 1.58155 10.3944 2.61081C11.4237 3.64007 12.003 5.03989 12.003 6.49943H12.0007Z"
                fill="#676a7b"
              />
            </svg>
          </div>

          <button className="bg-gradient-to-r from-[#00a0d2] to-[#05dc82] text-white px-5 py-2.5 rounded-[8px] h-[40px] w-[160px] flex items-center justify-center gap-2 font-medium text-[16px]">
            <svg
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 7H8V2C8 1.45 7.55 1 7 1C6.45 1 6 1.45 6 2V7H1C0.45 7 0 7.45 0 8C0 8.55 0.45 9 1 9H6V14C6 14.55 6.45 15 7 15C7.55 15 8 14.55 8 14V9H13C13.55 9 14 8.55 14 8C14 7.45 13.55 7 13 7Z"
                fill="white"
              />
            </svg>
            {BUTTON_NEW_TEXT}
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="w-6 h-6 border border-[#7a7a7a] rounded-[2px]"
            />
            <span className="text-[12px] font-semibold text-[#010623]">
              {SELECT_ALL_TEXT}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Select>
              <SelectTrigger className="w-[128px] h-[30px] border-[#7a7a7a] text-[12px]">
                <SelectValue placeholder={SORT_BY_TEXT} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="date">Date</SelectItem>
                <SelectItem value="size">Size</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex items-center gap-2">
              <button className="w-[30px] h-[30px] flex items-center justify-center border border-[#7a7a7a] rounded-[5px]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 5H3C2.45 5 2 5.45 2 6C2 6.55 2.45 7 3 7H13C13.55 7 14 6.55 14 6C14 5.45 13.55 5 13 5ZM13 9H3C2.45 9 2 9.45 2 10C2 10.55 2.45 11 3 11H13C13.55 11 14 10.55 14 10C14 9.45 13.55 9 13 9Z"
                    fill="#7a7a7a"
                  />
                </svg>
              </button>

              <button className="w-[30px] h-[30px] flex items-center justify-center border border-[#7a7a7a] rounded-[5px]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 2H8V8H14V2ZM14 10H8V16H14V10ZM6 2H2V8H6V2ZM6 10H2V16H6V10Z"
                    fill="#7a7a7a"
                  />
                </svg>
              </button>
            </div>

            <div className="bg-white border-[0.8px] border-[#7a7a7a] rounded-[5px] w-[80px] h-[34px] flex">
              <button className="flex-1 bg-[#e0e2e5] flex items-center justify-center">
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 1.75H7V2.625H0V1.75ZM0 3.5H7V4.375H0V3.5ZM0 5.25H7V6.125H0V5.25Z"
                    fill="#4b5563"
                  />
                </svg>
              </button>
              <div className="w-[0.8px] bg-[#7a7a7a]" />
              <button className="flex-1 flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 0H2V4H6V0ZM14 0H10V4H14V0ZM6 6H2V10H6V6ZM14 6H10V10H14V6ZM6 12H2V16H6V12ZM14 12H10V16H14V12Z"
                    fill="#7a7a7a"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="border-b border-[#7a7a7a] pb-2 mb-2 flex items-center gap-[140px] pl-[300px]">
          <span className="text-[12px] font-semibold text-[#999] tracking-[0.12px]">
            {COLUMN_SIZE}
          </span>
          <span className="text-[12px] font-semibold text-[#999] tracking-[0.12px]">
            {COLUMN_LAST_UPDATED}
          </span>
        </div>

        <div>
          {files.map((file) => (
            <FileRow key={file.id} file={file} />
          ))}
        </div>
      </div>
    </div>
  );
}
