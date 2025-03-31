import HomePage from './views/home/HomePage';

export const AppRoutes = [
  { path: 'home', element: <HomePage /> },
  { path: '*', element: <HomePage /> },
];
