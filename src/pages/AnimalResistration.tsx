import { useForm } from 'react-hook-form';
import { Breadcrumb } from '../components/Breadcrumb';
import { Button } from '../components/Button';
import { ContainerInputFile } from '../components/ContainerInputFile';
import { Input } from '../components/Input';
import { InputFile } from '../components/InputFile';
import { Select } from '../components/Select';
import { Main } from '../components/layouts/Main';
import {
  AnimalForm,
  AnimalSchema,
} from '../services/datasources/schemas/AnimalSchema';
import { generateLinkPreview } from '../utils/generateLinkPreview';
import { Gallery } from '../components/Gallery';
import { TextArea } from '../components/TextArea';
import { InputRadio } from '../components/InputRadio';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAnimalCreate } from '../services/datasources/hooks/useAnimalCreate';
// import { useAuth } from '../context/AuthProvider/useAuth';
import { getUserLocalStorage } from '../context/AuthProvider/utils';
import { IUser } from '../@types/types';

const optionsSex = [
  { label: 'Macho', value: 'Macho' },
  { label: 'Fêmea', value: 'Fêmea' },
];

const optionsSpecie = [
  { label: 'Cachorro', value: 'Cachorro' },
  { label: 'Gato', value: 'Gato' },
];

const optionsSize = [
  { label: 'Pequeno', value: 'Pequeno' },
  { label: 'Médio', value: 'Médio' },
  { label: 'Grande', value: 'Grande' },
];

export function AnimalResistration() {
  // const { id } = useAuth(); //TODO : Verificar pq o auth está vindo null ao cadastrar animal
  const user = getUserLocalStorage() as IUser | null;

  const {
    register,
    control,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm<AnimalForm>({
    resolver: zodResolver(AnimalSchema),
    defaultValues: {
      userId: user?.id,
    },
  });

  const photoFiles = watch('photoFiles') as File[];

  const linksImages = photoFiles?.map((file) => generateLinkPreview(file));

  const { mutate } = useAnimalCreate();

  const handleSubmitData = (data: AnimalForm) => {
    mutate(data);
  };

  return (
    <Main>
      <main className="pb-5 text-primary ">
        <Breadcrumb>
          <Breadcrumb.Item to="/">Inicio</Breadcrumb.Item>
          <Breadcrumb.Item to=".">Cadastro do Pet</Breadcrumb.Item>
        </Breadcrumb>
        <h1 className="text-4xl font-bold my-3">Cadastro do Pet</h1>

        <form onSubmit={handleSubmit(handleSubmitData)} className="mt-10">
          <input type="hidden" {...register('userId')} />

          <Input label="Nome do Pet" {...register('name')}>
            <Input.Error message={errors.name?.message} />
          </Input>
          <div className="flex flex-wrap md:gap-4">
            <Select
              data={optionsSpecie}
              displayKey="label"
              valueKey="value"
              label="Espécie"
              className="flex-1"
              {...register('specie')}
            >
              <Select.Error message={errors.specie?.message} />
            </Select>
            <Input label="Raça" className="flex-1" {...register('race')}>
              <Input.Error message={errors.race?.message} />
            </Input>
          </div>
          <div className="flex flex-wrap md:gap-4">
            <Select
              data={optionsSize}
              displayKey="label"
              valueKey="value"
              label="Porte"
              className="flex-1"
              {...register('stature')}
            >
              <Select.Error message={errors.stature?.message} />
            </Select>
            <Select
              data={optionsSex}
              displayKey="label"
              valueKey="value"
              label="Sexo"
              className="flex-1"
              {...register('sex')}
            >
              <Select.Error message={errors.sex?.message} />
            </Select>
            <Input
              type="date"
              label="Data de nascimento (opcinal)"
              className="flex-1"
              {...register('dateBirth')}
            >
              <Input.Error message={errors.dateBirth?.message} />
            </Input>
          </div>
          <span className="block mb-4">
            Nos envie fotos, queremos conhecer o animalzinho:
          </span>
          <div className="flex gap-4 max-h-[250px]">
            <ContainerInputFile>
              <InputFile
                name="photoFiles"
                label="adicionar fotos"
                multiple
                accept="image/png,image/jpeg"
                control={control}
              >
                <InputFile.Error message={errors.photoFiles?.message} />
              </InputFile>
            </ContainerInputFile>

            {photoFiles?.length > 0 && (
              <div className="border-2 rounded-md border-primary p-2">
                <Gallery photos={linksImages} maxImgs={1} />
              </div>
            )}
          </div>

          <div className="mt-10">
            <TextArea label="Descrição" {...register('description')}>
              <TextArea.Error message={errors.description?.message} />
            </TextArea>

            <p className="mb-5 text-xl font-semibold">Sobre a saúde do pet:</p>

            <div className="flex flex-col gap-24 md:flex-row flex-wrap mb-5">
              <div>
                <span className="font-medium">Possui deficiência:</span>
                <div className="flex">
                  <InputRadio
                    label="Sim"
                    value="true"
                    {...register('disability')} //TODO : verificar pq os campos não trocam os values para true
                  />
                  <InputRadio
                    label="Não"
                    value="false"
                    {...register('disability')} //TODO : verificar pq os campos não trocam os values false
                  />
                </div>
              </div>
              <div>
                <span className="font-medium">Vacinado:</span>
                <div className="flex">
                  <InputRadio
                    label="Sim"
                    value="true"
                    {...register('vaccinated')}
                  />
                  <InputRadio
                    label="Não"
                    value="false"
                    {...register('vaccinated')}
                  />
                </div>
              </div>
              <div>
                <span className="font-medium">Possui alguma doença:</span>
                <div className="flex">
                  <InputRadio
                    label="Sim"
                    value="true"
                    {...register('disease')}
                  />
                  <InputRadio
                    label="Não"
                    value="false"
                    {...register('disease')}
                  />
                </div>
              </div>
            </div>

            <Input
              label="Qual deficiência? "
              {...register('disabilityDescription')}
            />

            <Input
              label="Qual a doença? "
              {...register('diseaseDescription')}
            />
          </div>

          <div className="flex mt-8">
            <Button
              className="w-full max-w-xs"
              buttonProps={{ type: 'submit' }}
            >
              <Button.Label>Cadastrar</Button.Label>
            </Button>
          </div>
        </form>
      </main>
    </Main>
  );
}
