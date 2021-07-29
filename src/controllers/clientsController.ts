import { Request, Response } from 'express'
const data = require('./../data.json')

const listClients: Array<{
  name: string,
  email: string
}> = []

interface ClientInterface {
  id: number,
  name: string,
  username: string,
  adress: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string
    },
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    }
  }
}

export default class ClientsController {
  public get = (req: Request, res: Response) => {
    return res.json(data)
  }

  public getByID = (req: Request, res: Response) => {
    const { id } = req.params
    const client = data.find((cli: ClientInterface) => cli.id === Number(id))

    if (!client) return res.status(404).json() //operação ternária

    return res.json(client)
  }

  public create = (req: Request, res: Response) => {
    const { name, email} = req.body

    listClients.push({name: name,email: email});
    console.log(listClients);

    return res.json({name, email});
  }

  public updateByID = (req: Request, res: Response) => {
    const {id} = req.params
    const {name} = req.body
    const client = data.find((cli: ClientInterface) => cli.id === Number(id))

    if (!client) return res.status(404).json() //operação ternária
    client.name = name

    return res.json(client)
  }

  private clientsFiltered = (data: any, id: Number) => {
    return data.filter((cli: ClientInterface) => cli.id != id)
  }

  public delete = (req: Request, res: Response) => {
    const {id} = req.params
    const clientsFiltered = this.clientsFiltered(data, Number(id))
  
    return res.json(clientsFiltered)
  }
}