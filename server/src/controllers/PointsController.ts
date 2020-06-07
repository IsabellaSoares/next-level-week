import { Request, Response } from 'express';
import knex from '../database/connection';

class PointsController {
  async create(request: Request, response: Response) {
    const {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items,
    } = request.body;

    const trx = await knex.transaction();

    const point = {
      image: '',
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items,
    };

    const insertedItems = await trx('points').insert(point);

    const point_id = insertedItems[0];

    const pointItems = items.map((item_id: number) => ({
      item_id,
      point_id,
    }));

    await trx('point_items').insert(pointItems);

    return response.json({ id: point_id, ...point });
  }
}

export default PointsController;
