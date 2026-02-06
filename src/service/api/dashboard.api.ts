
import apiClient from './clients';
import type { DashboardStats } from '../../types/dashboard.types';

export const dashboardApi = {
  getStats: async (): Promise<DashboardStats> => {
    const { data } = await apiClient.get<DashboardStats>('/admin/overview');
    return data;
  },
};