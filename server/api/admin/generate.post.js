import { generate_test_data } from '@/server/database/admin';

export default defineEventHandler(async event => {
  const generated_field = await generate_test_data();

  return {
    generated_field: generated_field
  };
});
