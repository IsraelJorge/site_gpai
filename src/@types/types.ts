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
  isLogged: () => boolean;
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

export interface AnimalData {
  id: number;
  name: string;
  specie: string;
  race: string;
  stature: string;
  sex: string;
  dateBirth: string;
  description: string;
  disability: boolean;
  vaccinated: boolean;
  disease: boolean;
  disabilityDescription: string;
  diseaseDescription: string;
  craetedAt: string;
  userId: number;
  images: Image[];
}

export interface Image {
  id: number;
  urls: string;
  animalId: number;
}
