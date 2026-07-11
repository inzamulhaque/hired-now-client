import {
  LayoutDashboard,
  BriefcaseBusiness,
  Users,
  MessageSquareMore,
  CreditCard,
  Bell,
  UserCircle2,
  FileText,
  Shield,
} from "lucide-react";

import { LucideIcon } from "lucide-react";

export type TSidebarItem = {
  title: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
  children?: TSidebarItem[];
};

export const employerSidebarItems: TSidebarItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Jobs",
    href: "/dashboard/jobs",
    icon: BriefcaseBusiness,
  },
  {
    title: "Applicants",
    href: "/dashboard/applicants",
    icon: Users,
    badge: "12",
  },
  {
    title: "Messages",
    href: "/dashboard/messages",
    icon: MessageSquareMore,
    badge: "3",
  },
  {
    title: "Payments",
    href: "/dashboard/payments",
    icon: CreditCard,
  },
  {
    title: "Notifications",
    href: "/dashboard/notifications",
    icon: Bell,
    badge: "5",
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: UserCircle2,
  },
  {
    title: "Security",
    href: "/dashboard/security",
    icon: Shield,
  },
];
