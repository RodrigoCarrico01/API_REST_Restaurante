import { Router } from "express"

import { TablesSessionsController} from "@/controllers/tables-sessions-controller"

const tablesSessionsRoutes = Router()
const tablesSessionsController = new TablesSessionsController()

tablesSessionsRoutes.get("/", tablesSessionsController.index)
tablesSessionsRoutes.post("/", tablesSessionsController.create)
tablesSessionsRoutes.patch("/:id", tablesSessionsController.update)

export { tablesSessionsRoutes }