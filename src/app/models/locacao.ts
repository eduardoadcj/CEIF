import { ItensLocacao } from './itens-locacao';

export class Locacao {
    id?:string;
    lid: string;
    uid: string;
    dataLocacao: Date;
    dataDevolucao: Date;
    itensLocacao: Array<ItensLocacao>;
}
