import { cnpjValidator } from './cnpjValidator'
import { cpfValidator } from './cpfValidator'

export const cpfOrCnpjValidator = (value?: string) => {
  if (!value) return false

  value = value.replace(/[^\d]+/g, '')

  if (value.length === 11) return cpfValidator(value)
  return cnpjValidator(value)
}
