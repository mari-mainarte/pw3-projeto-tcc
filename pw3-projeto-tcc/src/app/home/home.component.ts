import { Component } from '@angular/core';
import { FuncionalidadeComponent } from "../funcionalidade/funcionalidade.component";
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [FuncionalidadeComponent, HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
