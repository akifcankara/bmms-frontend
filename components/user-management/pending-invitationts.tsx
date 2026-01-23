import InvitationItem from "./invitation-item";

const PENDING_INVITATIONS = [
  {
    id: "1",
    email: "james.wilson@company.com",
    invitedTime: "3 days ago",
    role: "Partner Role",
  },
  {
    id: "2",
    email: "maria.garcia@partner.com",
    invitedTime: "5 days ago",
    role: "Partner Role",
  },
  {
    id: "3",
    email: "alex.turner@bmms.com",
    invitedTime: "1 week ago",
    role: "Staff Role",
  },
  {
    id: "4",
    email: "sophia.lee@partner.com",
    invitedTime: "2 weeks ago",
    role: "Partner Role",
  },
  {
    id: "5",
    email: "kevin.martinez@bmms.com",
    invitedTime: "2 weeks ago",
    role: "Staff Role",
  },
];

export default function PendingInvitations() {
  const handleResend = (email: string) => {
    console.log("Resending invitation to:", email);
  };

  const handleRevoke = (email: string) => {
    console.log("Revoking invitation for:", email);
  };

  return (
    <div className="flex-1 bg-white border border-[#e5e7eb] rounded-xl shadow-sm">
      <div className="border-b border-[#e5e7eb] px-6 py-6">
        <div className="flex items-center justify-between">
          <h3 className="text-[#111827] text-lg font-semibold leading-7">
            Pending Invitations
          </h3>
          <div className="bg-[#ffedd5] px-3 py-1 rounded-full">
            <span className="text-[#c2410c] text-xs font-medium leading-4">
              {PENDING_INVITATIONS.length} Pending
            </span>
          </div>
        </div>
      </div>

      <div className="px-6 pb-6 pt-6 flex flex-col gap-4">
        {PENDING_INVITATIONS.map((invitation) => (
          <InvitationItem
            key={invitation.id}
            email={invitation.email}
            invitedTime={invitation.invitedTime}
            role={invitation.role}
            onResend={() => handleResend(invitation.email)}
            onRevoke={() => handleRevoke(invitation.email)}
          />
        ))}
      </div>
    </div>
  );
}
