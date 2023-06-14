import { toast } from 'react-toastify';

import axios, { AxiosError } from 'axios';

import { ReponseDataError } from '../@types/types';

export function handleErrorRequest(error: AxiosError<ReponseDataError>) {
  if (axios.isAxiosError(error)) {
    if (error.code === 'ERR_NETWORK') toast.error('Erro de conexão!!');

    if (error.response?.status === 401) {
      toast.error(error.response?.data.message);
    }
    console.log(error);
  } else {
    toast.error('Houve algum erro com servidor, tente novamente mais tarde.');
  }
}
