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

export const get_all_places_with_shemas = () => {
  return prisma.place.findMany({
    include: {
      Schema: true
    }
  });
};

export const get_schema_recipe = schemaId => {
  return prisma.SchemaRecipe.findMany({
    where: {
      schemaId
    },
    select: {
      item: true,
      quantity: true
    }
  });
};
