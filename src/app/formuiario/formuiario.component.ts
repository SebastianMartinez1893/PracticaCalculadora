import { Component, EventEmitter, Output } from '@angular/core';
import {FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formuiario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formuiario.component.html',
  styleUrl: './formuiario.component.css'
})
export class FormuiarioComponent {
operandoA : number | null = null;
operandoB : number | null = null;
@Output() resultadoSuma = new EventEmitter<number>();

sumar(){
  if (this.operandoA && this.operandoB)
  {
    const result = this.operandoA + this.operandoB;
    this.resultadoSuma.emit(result);
  }
  else{
    console.log('Deben introducir valores correctos')
  }
}

}

