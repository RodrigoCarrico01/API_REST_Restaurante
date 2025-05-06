import { Router } from "express"

import { productsRoutes } from "./products-routes"
import { tablesRoutes } from "./tables-routes"

const routes = Router()
routes.use("/products", productsRoutes)
routes.use("/tables", tablesRoutes)

export { routes }