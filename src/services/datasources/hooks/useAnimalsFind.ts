import { useQuery } from 'react-query';

import { key } from '../utils/querykeys';
import { Api } from '../../lib/axios';
import { AnimalData, IUser } from '../../../@types/types';

export function useAnimalsFind(id: string) {
  return useQuery<AnimalData & { user: IUser }>([key.animalsFind, id], {
    queryFn: async () => {
      const response = await Api.get(`/animal/${id}`);

      return response.data;
    },
  });
}
