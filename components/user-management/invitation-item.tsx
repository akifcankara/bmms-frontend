import { cn } from "@/lib/utils";

interface InvitationItemProps {
  email: string;
  invitedTime: string;
  role: string;
  onResend: () => void;
  onRevoke: () => void;
}

const MailIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 3H2C1.44772 3 1 3.44772 1 4V12C1 12.5523 1.44772 13 2 13H14C14.5523 13 15 12.5523 15 12V4C15 3.44772 14.5523 3 14 3Z"
      stroke="#EA580C"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M1 4L8 8.5L15 4"
      stroke="#EA580C"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 3L3 9M3 3L9 9"
      stroke="#DC2626"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function InvitationItem({
  email,
  invitedTime,
  role,
  onResend,
  onRevoke,
}: InvitationItemProps) {
  return (
    <div className="bg-[#fff7ed] rounded-lg p-4 flex items-center justify-between w-full">
      <div className="flex items-center flex-1">
        <div className="bg-[#fed7aa] rounded-full w-10 h-10 flex items-center justify-center shrink-0">
          <MailIcon />
        </div>
        <div className="flex flex-col ml-3">
          <p className="text-[#111827] text-base font-medium leading-6">
            {email}
          </p>
          <p className="text-[#6b7280] text-xs leading-4">
            Invited {invitedTime} • {role}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={onResend}
          className="bg-[#2563eb] text-white text-xs font-medium leading-4 px-3 py-1.5 rounded hover:bg-[#1d4ed8] transition-colors"
        >
          Resend
        </button>
        <button
          onClick={onRevoke}
          className="p-1 hover:bg-[#fee2e2] rounded transition-colors"
          aria-label="Revoke invitation"
        >
          <CloseIcon />
        </button>
      </div>
    </div>
  );
}
