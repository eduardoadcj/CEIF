import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { RecuperarSenhaComponent } from '../recuperar-senha/recuperar-senha.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private auth: AuthService,
    private recuperar: RecuperarSenhaComponent
    ) { }

  ngOnInit() {}
  loginForm = this.fb.group({
    id: [undefined],
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required]],
  })

  login(){
    this.auth.login(this.loginForm.value.email,this.loginForm.value.senha);
  }

}
