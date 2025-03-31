import HomePage from './views/home/HomePage';
import InventoryPage from './views/inventory/InventoryPage';
import LeadsPage from './views/leads/LeadsPage';
import CampaignsPage from './views/campaigns/CampaignsPage';
import ConversationsPage from './views/conversations/ConversationsPage';
import ChatbotsPage from './views/ai/ChatbotsPage';
import AIControlPage from './views/ai/AIControlPage';
import ReportsPage from './views/reports/ReportsPage';
import SettingsPage from './views/settings/SettingsPage';

export const AppRoutes = [
  { path: 'home', element: <HomePage /> },
  { path: 'inventory', element: <InventoryPage /> },
  { path: 'leads', element: <LeadsPage /> },
  { path: 'campaigns', element: <CampaignsPage /> },
  { path: 'conversations', element: <ConversationsPage /> },
  { path: 'chatbots', element: <ChatbotsPage /> },
  { path: 'ai-control', element: <AIControlPage /> },
  { path: 'reports', element: <ReportsPage /> },
  { path: 'settings', element: <SettingsPage /> },
  { path: '*', element: <HomePage /> },
];