import { get_place_by_id } from '@/server/database/app';

export default defineEventHandler(async event => {
  const place = await get_place_by_id(parseInt(event.context.params.placeId));

  return {
    place
  };
});
