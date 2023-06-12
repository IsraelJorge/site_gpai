import { any, z } from 'zod';
import { Message } from './messages/messagesSchema';

export const AnimalSchema = z.object({
  name: z.string().min(6, Message.min(6)).nonempty(Message.required),
  specie: z.string().nonempty(Message.required),
  race: z.string().nonempty(Message.required),
  stature: z.string().nonempty(Message.required),
  sex: z.string().nonempty(Message.required),
  dateBirth: z.string().min(10, Message.min(10)).nonempty(Message.required),
  description: z.string().nonempty(Message.required),
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

export type AnimalForm = z.infer<typeof AnimalSchema>;
