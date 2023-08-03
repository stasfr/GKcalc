import { prisma } from '.';

export const get_all_places = () => {
  return prisma.place.findMany();
};

export const get_place_by_id = placeId => {
  return prisma.place.findUnique({
    where: {
      id: placeId
    }
  });
};

export const get_schemas_by_place = placeId => {
  return prisma.schema.findUnique({
    where: {
      placeId
    }
  });
};
