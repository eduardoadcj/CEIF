import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    ) { }

  ngOnInit() {}

  loginForm = this.fb.group({
    id: [undefined],
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required]],
  })

  login(){
    this.router.navigate(['home']);
  }
}
