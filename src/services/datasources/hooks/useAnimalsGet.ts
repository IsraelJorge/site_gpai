import { useQuery } from 'react-query';

import { key } from '../utils/querykeys';
import { Api } from '../../lib/axios';
import { AnimalData } from '../../../@types/types';

export function useAnimalsGet() {
  return useQuery<AnimalData[]>(key.animalsGet, {
    queryFn: async () => {
      const response = await Api.get('/animal');

      return response.data;
    },
  });
}
