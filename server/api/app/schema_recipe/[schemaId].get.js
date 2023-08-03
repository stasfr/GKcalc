import { get_schema_recipe } from '@/server/database/app';

export default defineEventHandler(async event => {
  const schema_recipe = await get_schema_recipe(
    parseInt(event.context.params.schemaId)
  );

  return {
    schema_recipe
  };
});
