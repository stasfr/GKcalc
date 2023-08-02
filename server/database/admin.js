import { prisma } from '.';

export const generate_test_data = () => {
  const place_data = [{ name: 'Двор' }, { name: 'Милый дом' }];

  prisma.place.createMany({
    data: place_data
  });

  const points_data = [
    { name: 'Зеленый' },
    { name: 'Красный' },
    { name: 'Синий' }
  ];

  prisma.point.createMany({
    data: points_data
  });

  const category_data = [
    {
      //1
      name: 'Дерево'
    },
    {
      //2
      name: 'Камень'
    },
    {
      //3
      name: 'Металл'
    },
    {
      //4
      name: 'Железные и стальные изделия',
      parentCategoryId: 3
    },
    {
      //5
      name: 'Ювелирные изделия',
      parentCategoryId: 3
    }
  ];

  prisma.itemcategory.createMany({
    data: category_data
  });

  const items_data = [
    {
      //1
      name: 'Бревно',
      itemCategoryId: 1,
      price: 0
    },
    {
      //2
      name: 'Доска',
      itemCategoryId: 1,
      price: 5
    },
    {
      //3
      name: 'Гвозди',
      itemCategoryId: 4,
      price: 27
    },
    {
      //4
      name: 'Железный слиток',
      itemCategoryId: 4,
      price: 80
    },
    {
      //5
      name: 'Простые железные детали',
      itemCategoryId: 4,
      price: 60
    }
  ];

  prisma.item.createMany({
    data: items_data
  });

  const schemas_data = [
    {
      //1
      name: 'Ящик',
      placeId: 1,
      energyCost: 7
    }
  ];

  prisma.schema.createMany({
    data: schemas_data
  });

  const schemas_recipes_data = [
    {
      //1
      schemaId: 1,
      itemId: 2,
      quantity: 4
    },
    {
      //2
      schemaId: 1,
      itemId: 3,
      quantity: 4
    },
    {
      //3
      schemaId: 1,
      itemId: 5,
      quantity: 2
    }
  ];

  prisma.schemarecipe.createMany({
    data: schemas_recipes_data
  });

  const items_recipes_data = [
    {
      //1
      itemId: 2,
      stationId: 1,
      energyCost: 10
    },
    {
      //2
      itemId: 3,
      stationId: 1,
      energyCost: 5
    },
    {
      //3
      itemId: 5,
      stationId: 1,
      energyCost: 4
    }
  ];

  prisma.schemarecipe.createMany({
    data: items_recipes_data
  });

  const itemes_recipes_list_data = [
    {
      //1
      recipeId: 1,
      stationId: 1,
      costItemId: 1,
      quantity: 1
    },
    {
      //2
      recipeId: 2,
      stationId: 1,
      costItemId: 4,
      quantity: 1
    },
    {
      //3
      recipeId: 3,
      stationId: 1,
      costItemId: 4,
      quantity: 1
    }
  ];

  prisma.itemrecipelist.createMany({
    data: itemes_recipes_list_data
  });

  return true;
};
