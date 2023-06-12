import { z } from 'zod';
import { Message } from './messages/messagesSchema';
import { cpfValidator } from '../validators/cpfValidator';

export const UserSchema = z.object({
  name: z.string().min(6, Message.min(6)).nonempty(Message.required),
  address: z.string().min(3, Message.min(3)).nonempty(Message.required),
  cpf: z.string().refine(cpfValidator, Message.cpf),
  password: z.string().min(6, Message.min(6)).nonempty(Message.required),
  email: z.string().email(Message.email).nonempty(Message.required),
  telephone: z.string().nonempty(Message.required),
  roleId: z.number().int(),
});

export type UserForm = z.infer<typeof UserSchema>;
