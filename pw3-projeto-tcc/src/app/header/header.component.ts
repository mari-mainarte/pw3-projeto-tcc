import { Component } from '@angular/core';
import { ContatoComponent } from "../contato/contato.component";
import { SobreComponent } from "../sobre/sobre.component";

@Component({
  selector: 'app-header',
  imports: [ContatoComponent, SobreComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
