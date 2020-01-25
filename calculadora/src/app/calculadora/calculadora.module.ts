import { CalculadoraComponent } from './component/calculadora.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [CalculadoraComponent],
  imports: [
    CommonModule
  ],
  exports:[
    CalculadoraComponent
  ]
})
export class CalculadoraModule { }
