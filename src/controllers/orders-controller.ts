import { NextFunction, Request, Response} from "express"
import { AppError } from "@/utils/app-error"
import {z} from "zod"
import { knex } from "@/database/knex"

class OrdersController {
  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const bodySchema = z.object({
        table_session_id: z.number(),
        product_id: z.number(),
        quantity: z.number(),
      })

      const { table_session_id, product_id, quantity} = bodySchema.parse(request.body)

      const session = await knex<TablesSessionsRepository>("tables_sessions").where({ id: table_session_id }).first()

      if (!session) {
        throw new AppError("Table session not found", 404)
      }
      if(session.closed_at){
        throw new AppError("Table session is already closed", 400)
      }

      const product = await knex<ProductRepository>("products").where({ id: product_id }).first()

      if (!product) {
        throw new AppError("Product not found", 404)
      }

      return response.status(201).json()
      
    } catch (error) {
      next(error)
    }
  }
}

export { OrdersController }