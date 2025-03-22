import { Component } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {

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
}
