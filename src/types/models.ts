export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  image: string;
  status: 'active' | 'inactive';
}

export interface Order {
  id: string;
  orderId: string;
  customer: {
    name: string;
    email: string;
  };
  product: string;
  quantity: number;
  amount: number;
  status: 'completed' | 'processing' | 'pending' | 'shipped' | 'cancelled';
  date: string;
  payment: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  orders: number;
  totalSpent: number;
  joinDate: string;
  status: 'Active' | 'Vip';
}

// src/types/api.ts
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface ApiError {
  message: string;
  code?: string;
  status: number;
}