import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit() {}

  loginForm = this.fb.group({
    id: [undefined],
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required]],
  })

  login(){
    console.log("Clicou")
  }
}
