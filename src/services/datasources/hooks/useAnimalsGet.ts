import { useQuery } from 'react-query';

import { AnimalData } from '../../../@types/types';
import { Api } from '../../lib/axios';
import { key } from '../utils/querykeys';

export function useAnimalsGet() {
  return useQuery<AnimalData[]>(key.animalsGet, {
    queryFn: async () => {
      const response = await Api.get('/animal');

      return response.data;
    },
  });
}
