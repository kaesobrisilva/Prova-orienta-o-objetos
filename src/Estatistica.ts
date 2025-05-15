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
    const vetor = this._numeros
    let resposta = [];
    const tamanho = vetor.length;
    while (resposta.length < tamanho) {
        const menorValor = Math.min(...vetor);
        resposta.push(menorValor);
        const indiceDoMenorValor = vetor.indexOf(menorValor);
        vetor.splice(indiceDoMenorValor, 1);
    }
    let metade = resposta.length / 2;
    metade = Math.floor(metade);
    if(resposta.length % 2 === 1){
      return resposta[metade];
    }
      return (resposta[metade] + resposta[metade - 1]) / 2;
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
