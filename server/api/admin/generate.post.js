import { generate_places } from '@/server/database/admin';

export default defineEventHandler(async event => {
  const body = await readBody(event);
  const generated_field = await generate_places();

  return {
    generated_field: generated_field
  };
});
