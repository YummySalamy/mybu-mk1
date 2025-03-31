import { FaHome, FaCog, FaBolt, FaWaveSquare, FaCogs } from 'react-icons/fa';
import { SiSemrush } from 'react-icons/si';
import { GiFallDown, GiElectricalResistance, GiPsychicWaves, GiHeatHaze } from 'react-icons/gi';
import { IoLogoCapacitor } from 'react-icons/io5';

export const SidebarItems = [
  {
    label: 'Home',
    icon: <FaHome />,
    href: '/app/home',
    isNavTitle: false,
    navItems: [],
  },
  {
    label: 'Physics Mechanics',
    icon: <FaCogs />,
    isNavTitle: false,
    navItems: [
      { label: 'Free Fall Experiment', icon: <GiFallDown />, href: '/app/free-fall' },
      { label: 'Projectile Motion', icon: <SiSemrush /> , href: '/app/projectile-motion' },
    ],
  },
  {
    label: 'Physics Electricity',
    icon: <FaBolt />,
    isNavTitle: false,
    navItems: [
      { label: 'Ohm’s Law Experiment', icon: <GiElectricalResistance />,  href: '/app/ohms-law' },
      { label: 'Capacitance Measurement', icon: <IoLogoCapacitor />, href: '/app/capacitance' },
    ],
  },
  {
    label: 'Physics Heat and Waves',
    icon: <FaWaveSquare />,
    isNavTitle: false,
    navItems: [
      { label: 'Heat Transfer', icon: <GiHeatHaze />, href: '/app/heat-transfer' },
      { label: 'Wave Interference', icon: <GiPsychicWaves />, href: '/app/wave-interference' },
    ],
  },
  {
    label: 'Settings',
    icon: <FaCog />,
    href: '/app/settings',
    isNavTitle: false,
    navItems: [],
  },
];
