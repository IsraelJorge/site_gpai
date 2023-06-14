import { useQuery } from 'react-query';

import { AnimalData, IUser } from '../../../@types/types';
import { Api } from '../../lib/axios';
import { key } from '../utils/querykeys';

export function useAnimalsFind(id: string) {
  return useQuery<AnimalData & { user: IUser }>([key.animalsFind, id], {
    queryFn: async () => {
      const response = await Api.get(`/animal/${id}`);

      return response.data;
    },
  });
}
