import { ReactNode } from 'react';
import { UseMutateFunction } from 'react-query';

export interface ChildrenProps {
  children?: React.ReactNode;
}

export type WithChildrenProps<T> = ChildrenProps & T;

export interface IUser {
  id?: number;
  name?: string;
  email?: string;
  role?: {
    id: number;
    name: string;
  };
  token?: symbol;
}

export interface IContextAuth extends IUser {
  authenticate: UseMutateFunction<any, unknown, IloginRequest, unknown>;
  logout: () => void;
  isLogged: () => Boolean;
}

export interface IAuthProvider {
  children: ReactNode;
}

export interface IloginRequest {
  email: string;
  password: string;
}

export type ReponseDataError = {
  message: string;
};

export type Roles = 'authenticated' | 'admin';
