import { get_all_places_with_shemas } from '@/server/database/app';

export default defineEventHandler(async event => {
  const data = await get_all_places_with_shemas();

  return {
    data
  };
});
