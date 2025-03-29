import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HijoComponent } from "./hijo/hijo.component";
import { FormuiarioComponent } from "./formuiario/formuiario.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HijoComponent, FormuiarioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  Titulo = 'Aplicación Calculadora';
}
