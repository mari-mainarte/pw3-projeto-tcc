import { Component } from '@angular/core';
import { ContatoComponent } from "../contato/contato.component";
import { SobreComponent } from "../sobre/sobre.component";

@Component({
  selector: 'app-footer',
  imports: [ContatoComponent, SobreComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
