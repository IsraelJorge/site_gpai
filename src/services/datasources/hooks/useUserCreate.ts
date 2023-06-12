import { useMutation } from 'react-query';
import { Api } from '../../lib/axios';
import { toast } from 'react-toastify';

import { Route } from '../../../utils/Routes';
import { useNavigate } from 'react-router-dom';
import { UserForm } from '../schemas/UserSchema';

export const useUserCreate = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: UserForm) => {
      return Api.post('/user', data);
    },
    onSuccess() {
      toast.success('Cadastrado realizado com sucesso.');
      navigate(Route.login);
    },
    onError(error) {
      console.log(error);
      toast.error('Error ao fazer o cadastro.');
    },
  });
};
