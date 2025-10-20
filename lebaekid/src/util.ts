export const generateLinks = (baseName: string, count: number, startFrom: number = 1): string[] => {
  return Array.from({ length: count }, (_, i) => `${'https://lebaek.id/images/gallery/'}${baseName}${startFrom + i}${'.jpg'}`);
};