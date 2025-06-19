import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  username = "m&p";
  senha = "123456";

  constructor(private fb: FormBuilder, private router: Router){
    this.loginForm = this.fb.group({
      user : ['', [Validators.required]],
      passwd : ['', [Validators.required]]
    });
  }

  submit() {
    if(this.loginForm.valid) {
      alert('Formulário válido');
    } else {
      alert('Formulário inválido');
    }
  }

  logar() {
    this.router.navigate(['/home']);
  }

  OnLogin(){
    let userInput = this.loginForm.get('user')?.value;
    let passwdInput = this.loginForm.get('passwd')?.value

    if(userInput == this.username && passwdInput == this.senha){
      this.logar();
    }else{
      alert("Usuário ou senha inválidos!")
    }
  }
}
