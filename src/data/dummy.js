import {
  ComputerDesktopIcon,
  UserGroupIcon,
  ChartBarIcon,
  BanknotesIcon,
  Cog8ToothIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";

export const links = [
  {
    title: "Projects",
    icon: <ComputerDesktopIcon />,
    path: "/",
  },
  {
    title: "Users",
    icon: <UserGroupIcon />,
    path: "/user",
  },
  {
    title: "Progress",
    icon: <ChartBarIcon />,
    path: "/progress",
  },
  {
    title: "Financial",
    icon: <BanknotesIcon />,
    path: "/financial",
  },
  {
    title: "Community",
    icon: <LightBulbIcon />,
    path: "/comminity",
  },
  {
    title: "Settings",
    icon: <Cog8ToothIcon />,
    path: "/settings",
  },
];
