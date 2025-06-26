import { Request, Response } from 'express';

let lista_de_pets = [];

export default class PetController {
  criaPet(req: any, res: any) {
    const novoPet = req.body;
    lista_de_pets.push(novoPet);
    return res.status(201).json(novoPet);
  }
}
