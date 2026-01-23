import { cn } from "@/lib/utils";

interface TaskCardProps {
  title: string;
  subtitle: string;
  priority: "High" | "Medium" | "Low";
  assignee: {
    name: string;
    avatar?: string;
    initials?: string;
  };
  dueDate: string;
  isOverdue?: boolean;
  borderColor: string;
}

const PRIORITY_STYLES = {
  High: {
    bg: "bg-[#fee2e2]",
    text: "text-[#b91c1c]",
  },
  Medium: {
    bg: "bg-[#ffedd5]",
    text: "text-[#c2410c]",
  },
  Low: {
    bg: "bg-[#fef9c3]",
    text: "text-[#a16207]",
  },
};

export default function TaskCard({
  title,
  subtitle,
  priority,
  assignee,
  dueDate,
  isOverdue = false,
  borderColor,
}: TaskCardProps) {
  const priorityStyle = PRIORITY_STYLES[priority];

  return (
    <div
      className={cn(
        "bg-white border border-solid rounded-lg p-4 flex flex-col gap-2",
        borderColor
      )}
    >
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1 flex-1">
          <h4 className="text-[#111827] text-base font-medium leading-6">
            {title}
          </h4>
          <p className="text-[#6b7280] text-xs leading-4">{subtitle}</p>
        </div>
        <div
          className={cn(
            "px-2 py-1 rounded flex items-center justify-center shrink-0",
            priorityStyle.bg
          )}
        >
          <span
            className={cn(
              "text-xs font-medium leading-4",
              priorityStyle.text
            )}
          >
            {priority}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {assignee.avatar ? (
            <img
              src={assignee.avatar}
              alt={assignee.name}
              className="w-5 h-5 rounded-full"
            />
          ) : (
            <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#00a0d2] to-[#05dc82] flex items-center justify-center">
              <span className="text-white text-[8px] font-semibold">
                {assignee.initials || "MA"}
              </span>
            </div>
          )}
          <span className="text-[#6b7280] text-xs leading-4">
            {assignee.name}
          </span>
        </div>

        <div className="flex items-center gap-1">
          {isOverdue ? (
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0ZM6 10.5C3.51471 10.5 1.5 8.48529 1.5 6C1.5 3.51471 3.51471 1.5 6 1.5C8.48529 1.5 10.5 3.51471 10.5 6C10.5 8.48529 8.48529 10.5 6 10.5Z"
                fill="#DC2626"
              />
              <path
                d="M6.75 6V3C6.75 2.58579 6.41421 2.25 6 2.25C5.58579 2.25 5.25 2.58579 5.25 3V6.375C5.25 6.58211 5.33231 6.78113 5.47882 6.92764L7.22882 8.67764C7.52171 8.97053 7.99658 8.97053 8.28947 8.67764C8.58237 8.38474 8.58237 7.90987 8.28947 7.61697L6.75 6.08251V6Z"
                fill="#DC2626"
              />
            </svg>
          ) : (
            <svg
              width="10.5"
              height="12"
              viewBox="0 0 11 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.625 1.5H8.75V0.75C8.75 0.335781 8.41422 0 8 0C7.58578 0 7.25 0.335781 7.25 0.75V1.5H3.75V0.75C3.75 0.335781 3.41422 0 3 0C2.58578 0 2.25 0.335781 2.25 0.75V1.5H1.375C0.615625 1.5 0 2.11563 0 2.875V10.625C0 11.3844 0.615625 12 1.375 12H9.625C10.3844 12 11 11.3844 11 10.625V2.875C11 2.11563 10.3844 1.5 9.625 1.5ZM9.5 10.625C9.5 10.7656 9.39062 10.875 9.25 10.875H1.75C1.60938 10.875 1.5 10.7656 1.5 10.625V4.5H9.5V10.625Z"
                fill={isOverdue ? "#DC2626" : "#EA580C"}
              />
            </svg>
          )}
          <span
            className={cn(
              "text-xs font-medium leading-4",
              isOverdue ? "text-[#dc2626]" : "text-[#ea580c]"
            )}
          >
            {dueDate}
          </span>
        </div>
      </div>
    </div>
  );
}
