import { Component } from '@angular/core';
import { FormuiarioComponent } from "../formuiario/formuiario.component";
import { ResultadoComponent } from "../resultado/resultado.component";

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [FormuiarioComponent, ResultadoComponent],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
[x: string]: any;

  private a: number = 0;
  private b: number = 0;
  aa: string = '';
  resultado: number = 0;

  CapturarB(evento: Event) {
    const ElementoInputA = evento.target as HTMLInputElement;
    this.a = parseInt(ElementoInputA.value);
  }

  CapturarA(evento: Event) {
    const ElementoInputb = evento.target as HTMLInputElement;
    this.b = parseInt(ElementoInputb.value);
  }

  Sumar() {
    this.resultado = this.a + this.b
  }
  ProcesarResultado(resultado : number){
this.resultado = resultado;
  }
}
