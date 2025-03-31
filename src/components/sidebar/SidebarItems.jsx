import { FaHome, FaBoxes, FaRobot, FaChartLine, FaCogs, FaComments, FaBullhorn, FaUsers } from 'react-icons/fa';
import { LuBotMessageSquare, LuBot } from "react-icons/lu";

export const SidebarItems = [
  {
    label: 'Home',
    icon: <FaHome />,
    href: '/app/home',
    isNavTitle: false,
    navItems: [],
  },
  {
    label: 'Conversations',
    icon: <FaComments />,
    href: '/app/conversations',
    isNavTitle: false,
    navItems: [],
  },
  {
    label: 'Inventory',
    icon: <FaBoxes />,
    href: '/app/inventory',
    isNavTitle: false,
    navItems: [],
  },
  {
    label: 'Leads',
    icon: <FaUsers />,
    href: '/app/leads',
    isNavTitle: false,
    navItems: [],
  },
  {
    label: 'Campaigns',
    icon: <FaBullhorn />,
    href: '/app/campaigns',
    isNavTitle: false,
    navItems: [],
  },
  {
    label: 'AI center',
    icon: <FaRobot />,
    isNavTitle: false,
    navItems: [
      { label: 'Chatbots', icon: <LuBotMessageSquare />, href: '/app/chatbots' },
      { label: 'AI Control', icon: <LuBot />, href: '/app/ai-control' },
    ],
  },
  {
    label: 'Reports',
    icon: <FaChartLine />,
    href: '/app/reports',
    isNavTitle: false,
    navItems: [],
  },
  {
    label: 'Settings',
    icon: <FaCogs />,
    href: '/app/settings',
    isNavTitle: false,
    navItems: [],
  },
];