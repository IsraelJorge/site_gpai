export const cnpjValidator = (cnpj?: string) => {
  if (!cnpj) {
    return false
  }

  // Remove caracteres não numéricos
  cnpj = cnpj.replace(/[^\d]+/g, '')

  // Verifica se o CNPJ tem 14 dígitos
  if (cnpj.length !== 14) {
    return false
  }

  // Verifica se todos os números do CNPJ são iguais
  const digitosIguais = cnpj.charAt(0).repeat(14)
  if (cnpj === digitosIguais) {
    return false
  }

  // Calcula os dois dígitos verificadores
  let tamanho = cnpj.length - 2
  let numeros = cnpj.substring(0, tamanho)
  const digitos = cnpj.substring(tamanho)
  let soma = 0
  let pos = tamanho - 7

  for (let i = tamanho; i >= 1; i--) {
    soma += Number(numeros.charAt(tamanho - i)) * pos--
    if (pos < 2) {
      pos = 9
    }
  }

  let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)
  if (resultado !== Number(digitos.charAt(0))) {
    return false
  }

  tamanho = tamanho + 1
  numeros = cnpj.substring(0, tamanho)
  soma = 0
  pos = tamanho - 7

  for (let i = tamanho; i >= 1; i--) {
    soma += Number(numeros.charAt(tamanho - i)) * pos--
    if (pos < 2) {
      pos = 9
    }
  }

  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)
  if (resultado !== Number(digitos.charAt(1))) {
    return false
  }

  return true
}
