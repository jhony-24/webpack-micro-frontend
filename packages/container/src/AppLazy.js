import { lazy } from 'react';

export const MarketingLazy = lazy(() => import('./components/MarketingApp'));
export const AuthLazy = lazy(() => import('./components/AuthApp'));
export const DashboardLazy = lazy(() => import('./components/DashboardApp'));
