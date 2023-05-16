export const cpfMask = (value: string) => {
  if (!value) return '';

  const cpfMasked = value
    .replace(/[\D]/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})(\d+?)/, '$1');

  return cpfMasked;
};

export const currencyMask = (value: string) => {
  if (!value) return '';

  const currencyMasked = value
    .replace(/\D/g, '')
    .replace(/(\d{1,2})$/, ',$1')
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

  return currencyMasked;
};
