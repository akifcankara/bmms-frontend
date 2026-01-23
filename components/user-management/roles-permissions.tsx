import RoleCard from "./role-card";

const AdminIcon = () => (
  <svg
    width="20"
    height="16"
    viewBox="0 0 20 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 0L12.5 5L18 6L14 10L15 16L10 13L5 16L6 10L2 6L7.5 5L10 0Z"
      fill="#7C3AED"
    />
  </svg>
);

const StaffIcon = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="7" cy="4" r="3" fill="#2563EB" />
    <path
      d="M0 16C0 12.6863 3.13401 10 7 10C10.866 10 14 12.6863 14 16H0Z"
      fill="#2563EB"
    />
  </svg>
);

const PartnerIcon = () => (
  <svg
    width="20"
    height="16"
    viewBox="0 0 20 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 7L4 5L0 9L4 13L6 11M14 7L16 5L20 9L16 13L14 11M8 8H12"
      stroke="#16A34A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const ADMIN_PERMISSIONS = [
  { name: "All module access", enabled: true },
  { name: "User management", enabled: true },
  { name: "System settings", enabled: true },
];

const STAFF_PERMISSIONS = [
  { name: "Module management", enabled: true },
  { name: "Client management", enabled: true },
  { name: "System settings", enabled: false },
];

const PARTNER_PERMISSIONS = [
  { name: "View clients", enabled: true },
  { name: "Track commissions", enabled: true },
  { name: "Edit system data", enabled: false },
];

export default function RolesPermissions() {
  return (
    <div className="flex-1 bg-white border border-[#e5e7eb] rounded-xl shadow-sm">
      <div className="border-b border-[#e5e7eb] px-6 py-6">
        <div className="flex items-center justify-between">
          <h3 className="text-[#111827] text-lg font-semibold leading-7">
            Roles & Permissions
          </h3>
          <button className="text-[#2563eb] text-sm font-medium leading-5 hover:text-[#1d4ed8] transition-colors">
            Manage
          </button>
        </div>
      </div>

      <div className="px-6 pb-6 pt-6 flex flex-col gap-4">
        <RoleCard
          roleName="Admin"
          description="Full system access"
          userCount={8}
          permissions={ADMIN_PERMISSIONS}
          icon={<AdminIcon />}
          theme="purple"
        />

        <RoleCard
          roleName="Staff"
          description="Internal operations team"
          userCount={26}
          permissions={STAFF_PERMISSIONS}
          icon={<StaffIcon />}
          theme="blue"
        />

        <RoleCard
          roleName="Partner"
          description="External partners"
          userCount={13}
          permissions={PARTNER_PERMISSIONS}
          icon={<PartnerIcon />}
          theme="green"
        />
      </div>
    </div>
  );
}
