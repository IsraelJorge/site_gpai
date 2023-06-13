import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider/useAuth';
import { IUser, Roles } from '../@types/types';
import { getUserLocalStorage } from '../context/AuthProvider/utils';

type PrivateRouterProps = {
  rolesAcess: Roles[];
  children: JSX.Element;
};

export const PrivateRouter = ({ rolesAcess, children }: PrivateRouterProps) => {
  const { isLogged } = useAuth();

  if (isLogged()) {
    const user = getUserLocalStorage() as IUser | null;

    const isRoleAcess = rolesAcess.includes((user?.role?.name as Roles) ?? '');

    if (isLogged() && isRoleAcess) {
      return children;
    }
  }

  return <Navigate to="/" />;
};
