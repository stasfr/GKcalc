import { prisma } from '.';

export const generate_places = () => {
  const data = [{ name: 'Двор' }];

  return prisma.place.createMany({
    data
  });
};

export const clearTables = () => {};
