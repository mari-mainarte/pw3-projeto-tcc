import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  username = "Mariana&Paola"
  senha = "saiforaentrosa"

  constructor(private fb: FormBuilder){
    this.loginForm = this.fb.group({
      user : this.fb.control(''),
      passwd : this.fb.control('')
    });
  }

  OnLogin(){
    let userInput = this.loginForm.get('user')?.value;
    let passwdInput = this.loginForm.get('passwd')?.value

    if (userInput == this.username && passwdInput == this.senha){
      alert("Bem-vindo!")
    }else{
      alert("ENTROSAAAAA")
    }
  }
}
