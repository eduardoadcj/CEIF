import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ValidarPessoaCronosService } from 'src/app/service/validar.pessoa.cronos.service';
import { PessoaCronos } from 'src/app/models/pessoa.cronos';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-cadastrar-assistente',
  templateUrl: './cadastrar-assistente.component.html',
  styleUrls: ['./cadastrar-assistente.component.scss'],
})
export class CadastrarAssistenteComponent implements OnInit {

  cadastroAssistenteForm = this.fb.group({
    id: [undefined],
    email: ['', [Validators.required, Validators.email]],
    senha: [''],
    cpf: ['', [Validators.required]]
  })

  constructor(
    private fb: FormBuilder,
    private validaPessoa: ValidarPessoaCronosService,
    private authService: AuthService,
    ) { }

  ngOnInit() {}

  cadastrar(){
    this.validaPessoa.validarUsuario(this.cadastroAssistenteForm.value.cpf,(pessoa: PessoaCronos)=>{
      if(pessoa){
        console.log(pessoa);
        this.authService.registrarUsuario(pessoa,this.cadastroAssistenteForm.value.email,this.cadastroAssistenteForm.value.senha);
        this.cadastroAssistenteForm.reset();
      }else{
        console.log("Usuário não encontrado");
      }
    })
  }

}
