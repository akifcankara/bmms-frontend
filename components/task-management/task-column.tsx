import { cn } from "@/lib/utils";
import TaskCard from "./task-card";

interface Task {
  id: string;
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
}

interface TaskColumnProps {
  title: string;
  count: number;
  icon: React.ReactNode;
  tasks: Task[];
  headerBg: string;
  borderColor: string;
  badgeBg: string;
  badgeText: string;
}

export default function TaskColumn({
  title,
  count,
  icon,
  tasks,
  headerBg,
  borderColor,
  badgeBg,
  badgeText,
}: TaskColumnProps) {
  return (
    <div
      className={cn(
        "bg-white border border-solid rounded-xl shadow-sm flex flex-col h-full w-full max-w-[357px]",
        borderColor
      )}
    >
      <div
        className={cn(
          "border-b border-[#e5e7eb] border-solid px-4 py-4",
          headerBg
        )}
      >
        <div className="flex items-center">
          <div className="pr-2">{icon}</div>
          <h3 className="text-[#111827] text-base font-semibold leading-6">
            {title}
          </h3>
          <div className={cn("ml-2 px-2 py-0.5 rounded-full", badgeBg)}>
            <span className={cn("text-xs font-semibold leading-4", badgeText)}>
              {count}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 p-4 overflow-y-auto max-h-[384px]">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            subtitle={task.subtitle}
            priority={task.priority}
            assignee={task.assignee}
            dueDate={task.dueDate}
            isOverdue={task.isOverdue}
            borderColor={borderColor}
          />
        ))}
      </div>
    </div>
  );
}
