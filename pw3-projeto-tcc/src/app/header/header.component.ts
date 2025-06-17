import { Component } from '@angular/core';
import { ContatoComponent } from "../contato/contato.component";

@Component({
  selector: 'app-header',
  imports: [ContatoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
