export function textSlice(text: string) {
  if (text.length >= 80) {
    return text.slice(0, 70) + '...';
  }
  return text;
}
