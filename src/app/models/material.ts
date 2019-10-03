import { Categoria } from './categoria';

export class Material {
    id?: string;
    descricao: string;
    quantidade:number;
    disponivel:number;
    categoria:Categoria;
    status: string;
}
