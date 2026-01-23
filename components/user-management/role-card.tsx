import { cn } from "@/lib/utils";

interface Permission {
  name: string;
  enabled: boolean;
}

interface RoleCardProps {
  roleName: string;
  description: string;
  userCount: number;
  permissions: Permission[];
  icon: React.ReactNode;
  theme: "purple" | "blue" | "green";
}

const THEME_STYLES = {
  purple: {
    bg: "bg-[#faf5ff]",
    border: "border-[#e9d5ff]",
    iconBg: "bg-[#f3e8ff]",
  },
  blue: {
    bg: "bg-[#eff6ff]",
    border: "border-[#bfdbfe]",
    iconBg: "bg-[#dbeafe]",
  },
  green: {
    bg: "bg-[#f0fdf4]",
    border: "border-[#bbf7d0]",
    iconBg: "bg-[#dcfce7]",
  },
};

const CheckIcon = ({ enabled }: { enabled: boolean }) => {
  if (enabled) {
    return (
      <svg
        width="10.5"
        height="12"
        viewBox="0 0 11 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.5 6L5 7.5L7.5 4.5"
          stroke="#7C3AED"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="5.5"
          cy="6"
          r="5"
          stroke="#7C3AED"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    );
  }

  return (
    <svg
      width="9"
      height="12"
      viewBox="0 0 9 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 3L7 9M7 3L2 9"
        stroke="#9CA3AF"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default function RoleCard({
  roleName,
  description,
  userCount,
  permissions,
  icon,
  theme,
}: RoleCardProps) {
  const themeStyle = THEME_STYLES[theme];

  return (
    <div
      className={cn(
        "border border-solid rounded-lg p-4 flex flex-col gap-3",
        themeStyle.bg,
        themeStyle.border
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div
            className={cn(
              "w-10 h-10 rounded-lg flex items-center justify-center shrink-0",
              themeStyle.iconBg
            )}
          >
            {icon}
          </div>
          <div className="flex flex-col ml-3">
            <h4 className="text-[#111827] text-base font-semibold leading-6">
              {roleName}
            </h4>
            <p className="text-[#6b7280] text-xs leading-4">{description}</p>
          </div>
        </div>
        <p className="text-[#111827] text-sm font-medium leading-5">
          {userCount} users
        </p>
      </div>

      <div className="flex flex-col gap-1">
        {permissions.map((permission, index) => (
          <div key={index} className="flex items-center gap-2">
            <CheckIcon enabled={permission.enabled} />
            <span
              className={cn(
                "text-xs leading-4",
                permission.enabled ? "text-[#4b5563]" : "text-[#9ca3af]"
              )}
            >
              {permission.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
