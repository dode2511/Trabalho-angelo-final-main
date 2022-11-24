import { Pessoa } from "./Pessoa";
import { Random } from "./Random";

export class Professor extends Pessoa{
    
    constructor(_nome: string) {
      super(_nome ,Random.random(50,100), Random.random(1,100), 100);
      this._energiaAtual = this._energiaMaxima
    }


    public estudar(): void {
        if(this._energiaAtual >= 20){

        this._inteligencia = this._inteligencia * 1.3;
        if(this._inteligencia >= 100){
            console.log(`O professor ${this._nome} Já pode começar o mestrado`);
            this._inteligencia = 100
        }
        this._energiaAtual =  this._energiaAtual *  0.7 
    }else{
         console.log(` Nao Há energia suficiente`);
        
    }
}

    
    public aula(): void {
        if(this._energiaAtual >= 20){
        this._energiaAtual = this._energiaAtual * 0.6
    }else{
         console.log(`O professor ${this._nome} desmaiou durante a aula`);
        
    }


    
}


public cafe(): void {
    this._energiaAtual += this._energiaMaxima * 1.3;
    if (this._energiaAtual > this._energiaMaxima) {
      this._energiaAtual = this._energiaMaxima;
    }
}

public status(): string {
    return (
        
        ("\nNome: " +this._nome )+
        ("\nEnergia Maxima: " + this._energiaMaxima.toFixed(1)) +
        ("\nEnergia Atual: " + this._energiaAtual.toFixed(1)) +
        ("\ninteligencia: " + this._inteligencia.toFixed(1)) 
        
        
    
    );
    


    
}
}
