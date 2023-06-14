import { useMutation, useQueryClient } from 'react-query';
import { Api } from '../../lib/axios';
import { AnimalForm } from '../schemas/AnimalSchema';
import { toast } from 'react-toastify';

import { Route } from '../../../utils/Routes';
import { useNavigate } from 'react-router-dom';
import { key } from '../utils/querykeys';

export const useAnimalCreate = () => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: AnimalForm) => {
      const formData = new FormData();

      formData.append('userId', String(data.userId));
      formData.append('name', data.name);
      formData.append('race', data.race);
      formData.append('sex', data.sex);
      formData.append('specie', data.specie);
      formData.append('stature', data.stature);
      formData.append('dateBirth', new Date(data.dateBirth).toISOString());
      formData.append('description', data.description);
      formData.append('disability', String(data.disability));
      formData.append('disease', String(data.disease));
      formData.append('vaccinated', String(data.vaccinated));
      formData.append(
        'disabilityDescription',
        String(data.disabilityDescription),
      );
      formData.append('diseaseDescription', String(data.diseaseDescription));

      data.photoFiles.forEach((photo) => {
        formData.append(`photoFiles`, photo);
      });

      return Api.post('/animal', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    },
    onSuccess() {
      toast.success('Pet cadastrado com sucesso.');
      queryClient.invalidateQueries(key.animalsGet);
      navigate(Route.home);
    },
    onError(error) {
      console.log(error);
      toast.error('Error ao fazer o cadastro.');
    },
  });
};
