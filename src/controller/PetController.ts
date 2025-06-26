
import Pet from '../types/pet';
import Especie from '../enum/Especie';

let lista_de_pets: Array<Pet> = [];

let id = 0;
function geraId() {
  id = id + 1;
  return id;
}

export default class PetController {

  listaPets(req: any, res: any) {
    return res.status(200).json(lista_de_pets);
  }

  criaPet(req: any, res: any) {
    const { adotado, especie, dataNascimento, nome } = <Pet>req.body;
    if (!Object.values(Especie).includes(especie)) {
      return res.status(400).json({ mensagem: 'Especie inválida' });
    }

    const novoPet: Pet = { id: geraId(), adotado, especie, dataNascimento, nome };
    lista_de_pets.push(novoPet);
    return res.status(201).json(novoPet);
  }

  atualizaPet(req: any, res: any) {
    const { id } = req.params;
    const { nome, especie, dataNascimento, adotado } = <Pet>req.body;
    const pet = lista_de_pets.find((pet) => pet.id === Number(id));
    if (!pet) return this.notFoundPet(res);
    pet.nome = nome;
    pet.especie = especie;
    pet.dataNascimento = dataNascimento;
    pet.adotado = adotado;
    return res.status(200).json(pet);
  }

  deletaPet(req: any, res: any) {
    const { id } = req.params;
    const pet = lista_de_pets.find((pet) => pet.id === Number(id));
    if (!pet) {
      return this.notFoundPet(res);
    }
    const index = lista_de_pets.indexOf(pet);
    lista_de_pets.splice(index, 1);
    return res.status(200).json({ mensagem: 'Pet deletado com sucesso' });
  }

  private notFoundPet(res: any) {
    return res.status(404).json({ mensagem: 'Pet não encontrado' });
  }
}
