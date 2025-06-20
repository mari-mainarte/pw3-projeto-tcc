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
  editarForm : FormGroup;
  criarBtn : boolean = false
  editarBtn : boolean = false
  nome = "";
  email = "";
  rm = "";
  telefone = "";
  chamadosAbertos = "";
  chamadosConcluidos = "";
  senha = "";
  tipoPerfil = ""

  nomeEditar = "";
  emailEditar = "";
  rmEditar = "";
  telefoneEditar = "";
  chamadosAbertosEditar = "";
  chamadosConcluidosEditar = "";
  senhaEditar = "";
  tipoPerfilEditar = "";

  usuarios: any[] = [
    {"nome": "Marion", "email": "marion@gmail.com", "rm": "248533", "telefone": "(11) 99356-3948","chamadosAbertos": "10", "chamadosConcluidos": "8", "senha": "123456", "tipoPerfil": "Funcionário"},
    {"nome": "Rogério", "email": "rogerio@gmail.com", "rm": "748659", "telefone": "(11) 90749-2172","chamadosAbertos": "7", "chamadosConcluidos": "4", "senha": "789012", "tipoPerfil": "Funcionário"}
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
      tipoPerfil : ['', [Validators.required]]
    });

    this.editarForm = this.fb.group({
      nome : '',
      email : '',
      rm : '',
      telefone : '',
      chamadosAbertos : '',
      chamadosConcluidos : '',
      senha : '',
      tipoPerfil : ''
    });
  }

  submitCadastro() {
    if (this.cadastroForm.valid) {
      alert('Formulário cadastrar válido');
    } else {
      alert('Formulário cadastrar inválido');
    }
  }

  submitEditar() {
    if (this.editarForm.valid) {
      alert('Formulário editar válido');
    } else {
      alert('Formulário editar inválido');
    }
  }

  criarUser(){
    this.criarBtn = !this.criarBtn;
  }

  editarUser(nome: string, email: string, rm: string, telefone: string, chamadosAbertos: string, chamadosConcluidos: string, senha: string, tipoPerfil: string){
    this.editarBtn = !this.editarBtn;
    this.nomeEditar = nome;
    this.emailEditar = email;
    this.rmEditar = rm;
    this.telefoneEditar = telefone;
    this.chamadosAbertosEditar = chamadosAbertos;
    this.chamadosConcluidosEditar = chamadosConcluidos;
    this.senhaEditar = senha;
    this.tipoPerfilEditar = tipoPerfil;
  }

  OnCadastrar(){
    this.nome = this.cadastroForm.get('nome')?.value;
    this.email = this.cadastroForm.get('email')?.value;
    this.rm = this.cadastroForm.get('rm')?.value;
    this.telefone = this.cadastroForm.get('telefone')?.value;
    this.chamadosAbertos = this.cadastroForm.get('chamadosAbertos')?.value;
    this.chamadosConcluidos = this.cadastroForm.get('chamadosConcluidos')?.value;
    this.senha = this.cadastroForm.get('senha')?.value;

    if(this.nome!="" && (this.email!="" && (this.rm!="" && (this.telefone!="" && (this.chamadosAbertos!="" && (this.chamadosConcluidos!="" && (this.senha!=""))))))){
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

  OnEditar(){
    this.nome = this.editarForm.get('nome')?.value;
    this.email = this.editarForm.get('email')?.value;
    this.rm = this.editarForm.get('rm')?.value;
    this.telefone = this.editarForm.get('telefone')?.value;
    this.chamadosAbertos = this.editarForm.get('chamadosAbertos')?.value;
    this.chamadosConcluidos = this.editarForm.get('chamadosConcluidos')?.value;
    this.senha = this.editarForm.get('senha')?.value;
    this.tipoPerfil = this.editarForm.get('tipoPerfil')?.value;

    if(this.nome == ""){
      this.nome = this.nomeEditar;
    }
    if(this.email == ""){
      this.email = this.emailEditar;
    }
    if(this.rm == ""){
      this.rm = this.rmEditar;
    }
    if(this.telefone == ""){
      this.telefone = this.telefoneEditar;
    }
    if(this.chamadosAbertos == ""){
      this.chamadosAbertos = this.chamadosAbertosEditar;
    }
    if(this.chamadosConcluidos == ""){
      this.chamadosConcluidos = this.chamadosConcluidosEditar
    }
    if(this.senha == ""){
      this.senha = this.senhaEditar;
    }
    if(this.tipoPerfil == ""){
      this.tipoPerfil = this.tipoPerfilEditar;
    }

    this.usuarios[this.usuarios.findIndex(i => i.rm == this.rmEditar)] = {"nome": this.nome, "email": this.email, "rm": this.rm, 
      "telefone": this.telefone, "chamadosAbertos": this.chamadosAbertos, "chamadosConcluidos": this.chamadosConcluidos, "senha": this.senha, "tipoPerfil": this.tipoPerfil}

  }

}
