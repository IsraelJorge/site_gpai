import { createContext, useCallback, useEffect, useState } from 'react';
import { useMutation } from 'react-query';

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  IAuthProvider,
  IContextAuth,
  IUser,
  IloginRequest,
  ReponseDataError,
} from '../../@types/types';
import { loginRequest } from '../../services/datasources/loginRequest';
import { Route } from '../../utils/Routes';
import { getUserLocalStorage, setUserLocalStorage } from './utils';
import { AxiosError } from 'axios';
import { handleErrorRequest } from '../../utils/errorsRequest';

export const AuthContext = createContext<IContextAuth>({} as IContextAuth);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null>(null);

  const navigate = useNavigate();

  const { mutate: authenticate } = useMutation({
    mutationFn: ({ email, password }: IloginRequest) =>
      loginRequest(email, password),

    onSuccess: (data) => {
      setUser(data);
      setUserLocalStorage(data);

      toast.success('Logado com sucesso!');
      navigate(Route.home);
    },

    onError: (error: AxiosError<ReponseDataError>) => {
      handleErrorRequest(error);
    },
  });

  const isLogged = useCallback(() => {
    try {
      getUserLocalStorage();
      return true;
    } catch (error) {
      return false;
    }
  }, []);

  function logout() {
    setUser(null);
    setUserLocalStorage(null);

    toast.success('Deslogado com sucesso!');
  }

  useEffect(() => {
    const user = getUserLocalStorage();

    if (user) {
      setUser(user);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...user, authenticate, logout, isLogged }}>
      {children}
    </AuthContext.Provider>
  );
};
