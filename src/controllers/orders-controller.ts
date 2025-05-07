import { NextFunction, Request, Response} from "express"
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

      return response.status(201).json()
      
    } catch (error) {
      next(error)
    }
  }
}

export { OrdersController }