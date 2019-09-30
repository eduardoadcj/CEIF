import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.component.html',
  styleUrls: ['./recuperar-senha.component.scss'],
})
export class RecuperarSenhaComponent implements OnInit {

  constructor(
    private fb: FormBuilder, 
    private auth: AuthService
  ) { }

  recuperarSenhaForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  })

  ngOnInit() {}

  recuperarSenha(){
    this.auth.recuperarSenha(this.recuperarSenhaForm.value.email);
  }

}
