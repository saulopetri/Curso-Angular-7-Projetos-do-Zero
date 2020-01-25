/**
 * Serviço responsável por executar as operações da
 * calculadora
 *
 * @author Saulo Petri <saulopetri@gmail.com>
 * @since 1.0.0
 */

import { Injectable } from '@angular/core';

@Injectable()
export class CalculadoraService {

  /* Define as constantes utilizadas
    para identificar as operações de cálculo */
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }
  /**
   * Método que calcula uma operação matemética dado
   * dois números
   * executa as operações de soma, subtração, divisão e multiplicação
   * @param num1 primeiro número
   * @param num2 segundo número
   * @param operacao operação que será realizada
   * (SOMA, SUBTRACAO,DIVISAO, MULTIPLICACAO)
   * @return number: Resultado da operação
   */
  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number;

    switch (operacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
        break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
        break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
        break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
      default:
        resultado = 0;
    }

    return resultado;
  }
}
