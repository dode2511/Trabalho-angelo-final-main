export class Random {
    static random(minimo: number, maximo: number) {
      return Math.round(minimo + Math.random() * (maximo - minimo));
    }
  }
  