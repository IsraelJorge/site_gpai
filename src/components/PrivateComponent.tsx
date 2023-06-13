import { Roles } from '../@types/types';
import { useAuth } from '../context/AuthProvider/useAuth';

type PrivateComponentProps = {
  children: JSX.Element;
  roleUser?: Roles;
};

export const PrivateComponent = ({
  children,
  roleUser = 'authenticated',
}: PrivateComponentProps) => {
  const { isLogged, role } = useAuth();

  if (isLogged) {
    const isRoleAcess = roleUser === role?.name;

    if (isLogged && isRoleAcess) {
      return children;
    }
  }

  return <></>;
};
