import { Injectable } from '@angular/core';
import { PessoaCronos } from '../models/pessoa.cronos';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class ValidarPessoaCronosService{

    private readonly URL = "http://192.168.1.4:8080/cronos/rest/service/validar/pessoa/";

    pessoaCronos: PessoaCronos = new PessoaCronos();

    constructor(private http: HttpClient){}

    validarUsuario(cpf: string, onComplete) : void {
        this.http.get<PessoaCronos[]>(this.URL+cpf).pipe(take(1)).subscribe(
            (data: PessoaCronos[]) => {
                if(data){
                    onComplete(data[0]);
                }else{
                    onComplete(null);
                }
                    
            }
        )
    }

    /*

    Não deu pra eu testar ainda 
    ehheuueuh

    Pra utilizar esse metodo basta chamar a funcao:
    validarUsuario("numero_cpf", (pessoa: PessoaCronos) => {
        if(pessoa){
            O usuario é valido
        }else{
            Usuario invalido
        }
    });
    */

}