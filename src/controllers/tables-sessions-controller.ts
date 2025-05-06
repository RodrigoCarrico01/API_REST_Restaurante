import { Request, Response, NextFunction } from "express"
import {z} from "zod"
import { knex } from "@/database/knex"

class TablesSessionsController {
  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const bodySchema = z.object({
        table_id: z.number(),
      })

      const { table_id } = bodySchema.parse(request.body)

      await knex<TablesSessionsRepository>("tables_sessions").insert({
        table_id, 
        opened_at: knex.fn.now()
      })

      return response.status(201).json()
    } catch (error) {
      next(error)
    }
  }
}

export { TablesSessionsController }