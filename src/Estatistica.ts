import { resolveObjectURL } from "buffer";

export class Estatistica {
  private _numeros: number[];

  constructor(numeros: number[]) {
    this._numeros = numeros;
  }

  media(){
    let soma = 0;
    for(let i = 0; i < this._numeros.length; i++){
      soma = soma + this._numeros[i];
    }
    return soma / this._numeros.length;
  }

  mediana() {
    let metade = this._numeros.length / 2;
    metade = Math.floor(metade);
    if(this._numeros.length % 2 === 1){
      return this._numeros[metade];
    }
      return (this._numeros[metade] + this._numeros[metade - 1]) / 2;
  }

  moda() {
  let moda = this._numeros[0];
  let frequencia = 0;
  for (let i = 0; i < this._numeros.length; i++) {
    let contagem = 0;
    for (let j = 0; j < this._numeros.length; j++) {
      if (this._numeros[j] === this._numeros[i]) {
        contagem++;
      }
    }
    if (contagem > frequencia) {
      frequencia = contagem;
      moda = this._numeros[i];
    }
  }
  return moda;
  }

  variancia() {
    let soma = 0;
    for(let i = 0; i < this._numeros.length; i++){
      soma = soma + this._numeros[i];
    }
    let media = soma / this._numeros.length;
    let somatorio = 0;
    for(let i = 0; i < this._numeros.length; i++){
      somatorio = somatorio + ((this._numeros[i] - media) * (this._numeros[i] - media));
    }
    return somatorio / (this._numeros.length - 1);
  }

  desvioPadrao() {
    let soma = 0;
    for(let i = 0; i < this._numeros.length; i++){
      soma = soma + this._numeros[i];
    }
    let media = soma / this._numeros.length;
    let somatorio = 0;
    for(let i = 0; i < this._numeros.length; i++){
      somatorio = somatorio + ((this._numeros[i] - media) * (this._numeros[i] - media));
    }
    let variancia =  somatorio / (this._numeros.length - 1);
    return Math.sqrt(variancia);
  }

  coeficienteDeVariacao() {
    let soma = 0;
    for(let i = 0; i < this._numeros.length; i++){
      soma = soma + this._numeros[i];
    }
    let media = soma / this._numeros.length;
    let somatorio = 0;
    for(let i = 0; i < this._numeros.length; i++){
      somatorio = somatorio + ((this._numeros[i] - media) * (this._numeros[i] - media));
    }
    let variancia =  somatorio / (this._numeros.length - 1);
    let desvioPadrao = Math.sqrt(variancia);
    return (desvioPadrao / media) * 100
  }
}
