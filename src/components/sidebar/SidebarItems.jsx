import { FaHome, FaBoxes, FaDatabase, FaRobot, FaChartLine, FaEnvelopeOpenText, FaCogs, FaComments, FaBullhorn, FaUsers } from 'react-icons/fa';

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
      { label: 'Chatbots', icon: <FaComments />, href: '/app/chatbots' },
      { label: 'AI Control', icon: <FaCogs />, href: '/app/ai-control' },
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