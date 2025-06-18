import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { ContatoComponent } from "./contato/contato.component";
import { SobreComponent } from './sobre/sobre.component';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, ContatoComponent, SobreComponent, FooterComponent, HeaderComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pw3-projeto-tcc';
}
