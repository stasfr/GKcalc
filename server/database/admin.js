import { prisma } from '.';
import fs from 'fs';

export const generate_test_data = async () => {
  await places();
  await points();
  await categories();
  await items();
  await schemas();
  await schemas_recipes();
  await items_recipes();
  await items_recipes_list();
  return true;
};

const places = async () => {
  const place_data = [];

  let rawdata = fs.readFileSync('db_data/places.json');
  let JSONdata = JSON.parse(rawdata);

  JSONdata.forEach(element => {
    console.log(element.name_eng);
    place_data.push({
      name: element.name,
      name_eng: element.name_eng,
      img: element.img
    });
  });

  return await prisma.place.createMany({
    data: place_data
  });
};

const points = async () => {
  const points_data = [
    { name: 'Зеленый', img: '' },
    { name: 'Красный', img: '' },
    { name: 'Синий', img: '' }
  ];

  return await prisma.point.createMany({
    data: points_data
  });
};

const categories = async () => {
  const category_data = [];

  let rawdata = fs.readFileSync('db_data/categories.json');
  let JSONdata = JSON.parse(rawdata);

  JSONdata.forEach(element => {
    console.log(element.name_eng);
    category_data.push({
      name: element.name,
      name_eng: element.name_eng,
      parentCategoryId: element.parentCategoryId
    });
  });

  return await prisma.ItemCategory.createMany({
    data: category_data
  });
};

const items = async () => {
  const items_data = [];

  let rawdata = fs.readFileSync('db_data/items.json');
  let JSONdata = JSON.parse(rawdata);

  JSONdata.forEach(element => {
    console.log(element.name_eng);
    items_data.push({
      name: element.name,
      name_eng: element.name_eng,
      wiki_href_eng: '',
      wiki_href: '',
      itemCategoryId: element.itemCategoryId,
      img: element.img,
      price: 0
    });
  });

  return await prisma.item.createMany({
    data: items_data
  });
};

const schemas = async () => {
  const schemas_data = [];

  let rawdata = fs.readFileSync('db_data/schemas.json');
  let JSONdata = JSON.parse(rawdata);

  JSONdata.forEach(element => {
    console.log(element.name_eng);
    schemas_data.push({
      name: element.name,
      name_eng: element.name_eng,
      wiki_href_eng: element.wiki_href_eng,
      wiki_href: element.wiki_href,
      placeId: element.placeId,
      img: element.img,
      energyCost: 0
    });
  });

  return await prisma.schema.createMany({
    data: schemas_data
  });
};

const schemas_recipes = async () => {
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

  return await prisma.SchemaRecipe.createMany({
    data: schemas_recipes_data
  });
};

const items_recipes = async () => {
  const items_recipes_data = [
    {
      //1
      itemId: 2,
      stationId: 1,
      energyCost: 10,
      quantity: 6
    },
    {
      //2
      itemId: 3,
      stationId: 1,
      energyCost: 5,
      quantity: 8
    },
    {
      //3
      itemId: 5,
      stationId: 1,
      energyCost: 4,
      quantity: 4
    }
  ];

  return await prisma.ItemRecipe.createMany({
    data: items_recipes_data
  });
};

const items_recipes_list = async () => {
  const items_recipes_list_data = [
    {
      //1
      recipeId: 1,
      costItemId: 1,
      quantity: 1
    },
    {
      //2
      recipeId: 2,
      costItemId: 4,
      quantity: 1
    },
    {
      //3
      recipeId: 3,
      costItemId: 4,
      quantity: 1
    }
  ];

  return await prisma.ItemRecipeList.createMany({
    data: items_recipes_list_data
  });
};
