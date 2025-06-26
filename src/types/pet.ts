import Especie from "../enum/Especie";

type Pet = {
    id: number;
    nome: string;
    especie: Especie;
    adotado: boolean;
    dataNascimento: Date;
}

export default Pet;