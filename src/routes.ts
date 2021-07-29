import { Router } from "express"

import {
  clientsController
} from './controllers'

const routes = Router()

// clients routes 
routes.get('/clients', clientsController.get)
routes.get('/clients/:id', clientsController.getByID)

routes.post('/clients', clientsController.create)

routes.put('/clients/:id', clientsController.updateByID)

routes.delete('/clients/:id', clientsController.delete)

export default routes
