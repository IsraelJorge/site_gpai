export const Mask = {
  cpf(value: string) {
    if (!value) return '';

    const maskedValue = value
      .replace(/[\D]/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})(\d+?)/, '$1');

    return maskedValue;
  },
  cnpj(value: string) {
    if (!value) return '';

    const maskedValue = value
      .replace(/[\D]/g, '')
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1/$2')
      .replace(/(\d{4})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})(\d+?)/, '$1');

    return maskedValue;
  },
  cpfOrCnpj(value: string) {
    return value.replace(/[\D]/g, '').length <= 11
      ? this.cpf(value)
      : this.cnpj(value);
  },
  currency(value: string) {
    if (!value) return '';

    const maskedValue = value
      .replace(/\D/g, '')
      .replace(/(\d{1,2})$/, ',$1')
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

    return maskedValue;
  },
  number(value: string) {
    if (!value) return '';

    const maskedValue = value.replace(/[\D]/g, '');

    return maskedValue;
  },
  date(value: string) {
    if (!value) return '';

    const maskedValue = value
      .replace(/[\D]/g, '')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\/\d{4})(\d+?)/, '$1');

    return maskedValue;
  },
  phone(value: string) {
    if (!value) return '';

    let maskedValue = value
      .replace(/[\D]/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d{3,5})/, '$1-$2')
      .replace(/(-\d{5})(\d+?)/, '$1');

    if (maskedValue.length === 15) {
      maskedValue = maskedValue
        .replace(/[\D]/g, '')
        .replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
    return maskedValue;
  },
  zipCode(value: string) {
    if (!value) return '';

    const maskedValue = value
      .replace(/[\D]/g, '')
      .replace(/(\d{5})(\d{2,3})/, '$1-$2')
      .replace(/(-\d{3})(\d+?)/, '$1');

    return maskedValue;
  },
};
