import { any, z } from 'zod';
import { Message } from './messages/messagesSchema';

export const AnimalSchema = z.object({
  name: z.string().min(3, Message.min(3)).nonempty(Message.required),
  specie: z.string().nonempty(Message.required),
  race: z.string().nonempty(Message.required),
  stature: z.string().nonempty(Message.required),
  sex: z.string().nonempty(Message.required),
  dateBirth: z.string().min(10, Message.min(10)).nonempty(Message.required),
  description: z.string().nonempty(Message.required),
  disability: z.string().optional().nullable(),
  vaccinated: z.string().optional().nullable(),
  disease: z.string().optional().nullable(),
  disabilityDescription: z.string().nullable(),
  diseaseDescription: z.string().nullable(),
  userId: z.number().int(),
  photoFiles: any()
    .array()
    .default([])
    .refine((value) => value.length >= 1, 'Adicione ao menos uma foto'),
});

export type AnimalForm = z.infer<typeof AnimalSchema>;
