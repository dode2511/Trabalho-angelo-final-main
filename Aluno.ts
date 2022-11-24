import { Pessoa } from "./Pessoa";
import { Random } from "./Random";

export class Aluno extends Pessoa{
    private _shape:number
    private _felicidade:number
    private _media:number
    constructor(nome: string) {
      super(nome ,Random.random(1,100), Random.random(1,100), 100);
      this._energiaAtual = this._energiaMaxima
      this._shape = Random.random(1,100)
      this._felicidade = Random.random(1,100)
      this._media = this._inteligencia/10
    }
  

    public estudar(): void {
        if(this._energiaAtual >= 20){

        this._inteligencia = this._inteligencia * 1.3;
        if(this._inteligencia >= 100){
            this._inteligencia = 100
        }
        this._shape = this._shape * 0.7
        this._energiaAtual =  this._energiaAtual *  0.8 
        this._media = this._inteligencia/10
    }else{
         console.log(`ERRO Nao Há energia suficiente`);
        
    }
    }

    public procrastinar(): void {
        this._energiaAtual += this._energiaMaxima * 1.2;
        this._inteligencia += this._inteligencia *0.85
        if (this._energiaAtual > this._energiaMaxima) {
          this._energiaAtual = this._energiaMaxima;
        }
        this._media = this._inteligencia/10
    }
  

    public malhar(): void {
        if(this._energiaAtual >= 20){
        this._shape = this._shape * 1.3
        if(this._shape > 100){
            this._shape = 100
        }
        this._inteligencia = this._inteligencia * 0.7
        this._energiaAtual = this._energiaAtual * 0.7
        this._media = this._inteligencia/10
    }else{
         console.log(`ERRO Nao Há energia suficiente`);
        
    }
    this._media = this._inteligencia/10
      }
      public get nome(): string {
        return this._nome
    }
    public set nome(nome: string) {
        this._nome = nome;
    }
      public get (): string {
        return this._nome
    }
      public get inteligencia (): number {
        return this._inteligencia
    }

    public feliz(): void {
        if(this._media >= 7 || this._shape >= 80){
            this._felicidade =this._felicidade * 1.1
        }else if (this._media >= 7 && this._shape >= 80){
            this._felicidade =this._felicidade * 1.5
        }else{
            this._felicidade = this._felicidade * 0.8
            this._energiaAtual = this._energiaAtual * 0.9
        }
        if(this._felicidade > 100){
            this._felicidade = 100
        }
      
      }
      public status(): string {
        return (
            "\nNome: " +this.nome +
            ("\nEnergia Maxima: " + this._energiaMaxima.toFixed(1)) +
            ("\nEnergia Atual: " + this._energiaAtual.toFixed(1)) +
            ("\ninteligencia: " + this._inteligencia.toFixed(1)) +
            ("\nshape: " + this._shape.toFixed(1))+
            ("\nfelicidade: " + this._felicidade.toFixed(1))+
            ("\nmedia: " + this._media.toFixed(1))+
            ("\n")+
            ("\n" + this.testar())
            
        );
    }


   
 public testar():string {
    if(this._shape >= 100){
       return  `Parabéns ${this.nome}, O NOVO RAMON DINO`
        
    }

    if(this._inteligencia >= 100){
        return `Parabéns ${this.nome}, QUE LEGAL VOCE É MUITO INTELIGENTE`;
        
    }
    if(this._energiaAtual <= 20){
        return ` ${this.nome}, VAI DORMIR `;
        
    }
    if(this._energiaAtual == this._energiaMaxima){
        return ` ${this.nome}, VAI TRABALHAR VAGABUNDO!`;
    }else{
        return ''
        
    }
 }



      
      }






      



 


      



