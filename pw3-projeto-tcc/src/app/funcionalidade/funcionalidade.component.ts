import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-funcionalidade',
  imports: [ReactiveFormsModule],
  templateUrl: './funcionalidade.component.html',
  styleUrl: './funcionalidade.component.css'
})
export class FuncionalidadeComponent {
  cadastroForm : FormGroup;
  criarBtn : boolean = false
  nome = "";
  email = "";
  rm = 0;
  telefone = "";
  chamadosAbertos = 0;
  chamadosConcluidos = 0;
  senha = "";

  usuarios: any[] = [
    {"nome": "Marion", "email": "marion@gmail.com", "rm": 248533, "telefone": "(11) 99356-3948","chamadosAbertos": 10, "chamadosConcluidos": 8, "senha": "123456"},
    {"nome": "Rogério", "email": "rogerio@gmail.com", "rm": 748659, "telefone": "(11) 90749-2172","chamadosAbertos": 7, "chamadosConcluidos": 4, "senha": "789012"}
  ];

  constructor(private fb: FormBuilder){
    this.cadastroForm = this.fb.group({
      nome : ['', [Validators.required]],
      email : ['', [Validators.required]],
      rm : ['', [Validators.required]],
      telefone : ['', [Validators.required]],
      chamadosAbertos : ['', [Validators.required]],
      chamadosConcluidos : ['', [Validators.required]],
      senha : ['', [Validators.required]],
    });
  }

  submit() {
    if (this.cadastroForm.valid) {
      alert('Formulário válido');
    } else {
      alert('Formulário inválido');
    }
  }

  criarUser(){
    this.criarBtn = !this.criarBtn;
  }

  OnCadastrar(){
    this.nome = this.cadastroForm.get('nome')?.value;
    this.email = this.cadastroForm.get('email')?.value;
    this.rm = this.cadastroForm.get('rm')?.value;
    this.telefone = this.cadastroForm.get('telefone')?.value;
    this.chamadosAbertos = this.cadastroForm.get('chamadosAbertos')?.value;
    this.chamadosConcluidos = this.cadastroForm.get('chamadosConcluidos')?.value;
    this.senha = this.cadastroForm.get('senha')?.value;

    const camposValidos = [this.nome, this.email, this.telefone, this.senha].every(v => v && v.trim() != '') 
     && this.rm != 0 && this.chamadosAbertos != 0 && this.chamadosConcluidos != 0;

    if(camposValidos){
      this.usuarios.push(
        {"nome": this.nome, "email": this.email, "rm": this.rm, 
          "telefone": this.telefone, "chamadosAbertos": this.chamadosAbertos, 
          "chamadosConcluidos": this.chamadosConcluidos, "senha": this.senha
        }
      )
    }else{
      alert("Todos os campos devem ser preenchidos!");
    }
  }

}
