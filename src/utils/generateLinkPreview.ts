export const generateLinkPreview = (file: File) => {
  if (!file?.name) return '';

  const link = URL.createObjectURL(file);

  return link;
};
