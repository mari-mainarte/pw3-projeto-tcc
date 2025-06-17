import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  username = "m&p";
  senha = "123456";

  constructor(private fb: FormBuilder){
    this.loginForm = this.fb.group({
      user : ['', [Validators.required]],
      passwd : ['', [Validators.required]]
    });
  }

  submit() {
    if (this.loginForm.valid) {
      alert('Formulário válido');
    } else {
      alert('Formulário inválido');
    }
  }

  OnLogin(){
    let userInput = this.loginForm.get('user')?.value;
    let passwdInput = this.loginForm.get('passwd')?.value

    if (userInput == this.username && passwdInput == this.senha){
      alert("Bem-vindo " + this.username + "!")
    }else{
      alert("Usuário ou senha inválidos!")
    }
  }
}
