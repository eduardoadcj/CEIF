import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ValidadorCpf } from 'src/app/util/validador.cpf';
import { ValidarPessoaCronosService } from 'src/app/service/validar.pessoa.cronos.service';
import { PessoaCronos } from 'src/app/models/pessoa.cronos';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss'],
})
export class CadastroUsuarioComponent implements OnInit {

  cpf: string = '00000000000';

  cadastroUsuarioForm = this.fb.group({
    id: [undefined],
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required]],
    cpf: ['', [Validators.required]]
  })

  constructor(private fb: FormBuilder,private validaPessoa: ValidarPessoaCronosService, private authService: AuthService) { }

  ngOnInit() {
  }

  cadastrar(){
    this.validaPessoa.validarUsuario(this.cadastroUsuarioForm.value.cpf,(pessoa: PessoaCronos)=>{
      if(pessoa){
        console.log(pessoa);
        this.authService.registrar(pessoa,this.cadastroUsuarioForm.value.email,this.cadastroUsuarioForm.value.senha);
        this.cadastroUsuarioForm.reset();
      }else{
        console.log("Usuário não encontrado");
      }
    })
  }






}
