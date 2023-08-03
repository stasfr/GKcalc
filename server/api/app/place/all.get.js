import { get_all_places } from '@/server/database/app';

export default defineEventHandler(async event => {
  const places = await get_all_places();

  return {
    places
  };
});
