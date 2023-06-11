import { any, z } from 'zod';

const message = 'Campo obrigatório';

const messageSize = (size: number) => `No mínimo ${size} caracteres`;

export const AnimalSchema = z.object({
  name: z.string().min(6, messageSize(6)).nonempty(message),
  specie: z.string().nonempty(message),
  race: z.string().nonempty(message),
  stature: z.string().nonempty(message),
  sex: z.string().nonempty(message),
  dateBirth: z.string().min(10, messageSize(10)).nonempty(message),
  description: z.string().nonempty(message),
  disability: z
    .string()
    .transform((value) => value === '1' || value === 'true')
    .optional()
    .nullable(),
  vaccinated: z
    .string()
    .transform((value) => value === '1' || value === 'true')
    .optional()
    .nullable(),
  disease: z
    .string()
    .transform((value) => value === '1' || value === 'true')
    .optional()
    .nullable(),
  disabilityDescription: z.string().nullable(),
  diseaseDescription: z.string().nullable(),
  userId: z.string().transform(Number),
  photoFiles: any()
    .array()
    .default([])
    .refine((value) => value.length >= 1, 'Adicione ao menos uma foto'),
});

export type Animal = z.infer<typeof AnimalSchema>;
