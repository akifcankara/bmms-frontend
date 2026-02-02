import { Clock, AlertCircle } from 'lucide-react';
import TaskColumn from './task-column';

const OVERDUE_TASKS = [
  {
    id: '1',
    title: 'Complete KYC Review',
    subtitle: 'TechCorp Industries - PRO Module',
    priority: 'High' as const,
    assignee: {
      name: 'John Anderson',
      initials: 'MA',
    },
    dueDate: '2 days ago',
    isOverdue: true,
  },
  {
    id: '2',
    title: 'Submit License Application',
    subtitle: 'Global Solutions Ltd - PRO Module',
    priority: 'High' as const,
    assignee: {
      name: 'Emma Wilson',
      initials: 'MA',
    },
    dueDate: '1 day ago',
    isOverdue: true,
  },
  {
    id: '3',
    title: 'Review Article Draft',
    subtitle: 'Ahmed Al-Rashid - MENA Leaders',
    priority: 'Medium' as const,
    assignee: {
      name: 'David Martinez',
      initials: 'MA',
    },
    dueDate: '3 days ago',
    isOverdue: true,
  },
];

const IN_PROGRESS_TASKS = [
  {
    id: '4',
    title: 'Market Research Analysis',
    subtitle: 'Digital Commerce Inc - Expansion',
    priority: 'Medium' as const,
    assignee: {
      name: 'Emma Wilson',
      initials: 'MA',
    },
    dueDate: 'Due in 2 days',
    isOverdue: false,
  },
  {
    id: '5',
    title: 'Document Verification',
    subtitle: 'Sarah Mitchell - PRO Module',
    priority: 'Low' as const,
    assignee: {
      name: 'John Anderson',
      initials: 'MA',
    },
    dueDate: 'Due in 5 days',
    isOverdue: false,
  },
  {
    id: '6',
    title: 'Partner Commission Calculation',
    subtitle: 'Summit Marketing Group - Multiple',
    priority: 'Medium' as const,
    assignee: {
      name: 'Robert Taylor',
      initials: 'MA',
    },
    dueDate: 'Due in 3 days',
    isOverdue: false,
  },
  {
    id: '7',
    title: 'Expansion Proposal Draft',
    subtitle: 'Lisa Anderson - Expansion',
    priority: 'High' as const,
    assignee: {
      name: 'John Anderson',
      initials: 'MA',
    },
    dueDate: 'Due tomorrow',
    isOverdue: false,
  },
];

const PENDING_TASKS = [
  {
    id: '8',
    title: 'Client Onboarding Call',
    subtitle: 'New Client - General',
    priority: 'Low' as const,
    assignee: {
      name: 'Unassigned',
      initials: 'MA',
    },
    dueDate: 'Due in 7 days',
    isOverdue: false,
  },
  {
    id: '9',
    title: 'Financial Report Review',
    subtitle: 'Multiple Clients - Financial',
    priority: 'Medium' as const,
    assignee: {
      name: 'Robert Taylor',
      initials: 'MA',
    },
    dueDate: 'Due in 10 days',
    isOverdue: false,
  },
  {
    id: '10',
    title: 'Update Client Profile',
    subtitle: 'Michael Chen - MENA Leaders',
    priority: 'Low' as const,
    assignee: {
      name: 'David Martinez',
      initials: 'MA',
    },
    dueDate: 'Due in 14 days',
    isOverdue: false,
  },
];

export default function Todo() {
  return (
    <div className="hidden md:flex gap-6 items-start justify-center w-full h-auto">
      <TaskColumn
        title="Overdue"
        count={12}
        icon={<AlertCircle className="w-5 h-5" />}
        tasks={OVERDUE_TASKS}
        headerBg="bg-[#fef2f2]"
        borderColor="border-[#fecaca]"
        badgeBg="bg-[#fee2e2]"
        badgeText="text-[#b91c1c]"
      />

      <TaskColumn
        title="In Progress"
        count={42}
        icon={<Clock className="w-5 h-5" />}
        tasks={IN_PROGRESS_TASKS}
        headerBg="bg-[#fff7ed]"
        borderColor="border-[#fed7aa]"
        badgeBg="bg-[#ffedd5]"
        badgeText="text-[#c2410c]"
      />

      <TaskColumn
        title="Pending"
        count={28}
        icon={<Clock className="w-5 h-5" />}
        tasks={PENDING_TASKS}
        headerBg="bg-[#fefce8]"
        borderColor="border-[#fef08a]"
        badgeBg="bg-[#fef9c3]"
        badgeText="text-[#a16207]"
      />
    </div>
  );
}
