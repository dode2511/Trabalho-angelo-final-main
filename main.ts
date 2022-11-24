import { Aluno } from "./Aluno";
import { Professor } from "./Professor";
import prompt from "prompt-sync";


console.clear()

let novo: Aluno[] = [];
novo.push(new Aluno("Pedro Menna"));
novo.push(new Aluno("Gabriela Cavalheiro"));
novo.push(new Aluno("Leon Dode"));

let senac : Professor[]=[];
senac.push(new Professor("Edecio"));
senac.push(new Professor('Angelo'));
senac.push(new Professor("Gladimir"));





let teclado = prompt();
let option: number = 0;
let escolhaAluno: number = 0;
let escolhaProf: number = 0;
let newName: string = ``;
// let : number = 0;


console.log(`========== Sistema Escolar =============`);
    console.log("||1. Professor                      ");
    console.log("||2. Aluno                          ");
    console.log("||3. Secretaria                     ");
    console.log("=====================================");
    option = +teclado(":  ");

    console.clear()

 if(option == 1){
    console.log(`========== Sistema Escolar =============`);
    for (let c = 1;c <= senac.length;c++){
    console.log(`||${c}. ${senac[c -1]._nome}                  `);
    }
    console.log(`========================================`);

     escolhaProf = +teclado("Selecione um Professor:  ");
    console.clear()
     

    while (true) {
        console.log(`========== ${senac[escolhaProf-1]._nome}  =============`);
        console.log("||1. Estudar                        ");
        console.log("||2. Dar Aula                       ");
        console.log("||3. Tomar Cafe                     ");
        console.log("||4. status                         ");
        console.log("||5. Sair                           ");
        console.log("=====================================");
    
        option = +teclado("Escolha uma opção ");
        console.clear()
    
        if(option == 5){
            console.clear()
            console.log(`Tchau Tchau`);
            break
        }
        switch (option) {
            case 1:
               
                senac[escolhaProf -1].estudar();
    
                console.log(senac[escolhaProf -1].status());
                break;
            case 2:
                
                senac[escolhaProf -1].aula();
                console.log(senac[escolhaProf -1].status());
                break;
                case 3:
                    senac[escolhaProf -1].cafe();
                    console.log(senac[escolhaProf -1].status());
                    break;
            case 4:
                
                console.log(senac[escolhaProf -1].status());
                break;
            default:
                break;
        }

    }
 }
if(option == 2){
 
    console.log(`========== Sistema Escolar =============`);
    for (let c = 1;c <= novo.length;c++){
    console.log(`||${c}. ${novo[c -1].nome}                  `);
    }
    console.log(`========================================`);

    escolhaAluno = +teclado("Selecione um Aluno:  ");
    console.clear()


while (true) {
    console.log(`========== ${novo[escolhaAluno-1].nome}  =============`);
    console.log("||1. Estudar                        ");
    console.log("||2. Malhar                         ");
    console.log("||3. Feliz                          ");
    console.log("||4. Procrastinar                   ");
    console.log("||5. Informações                    ");
    console.log("||6. Sair                           ");
    console.log("=====================================");

    option = +teclado("Escolha uma opção ");
    console.clear()

    if(option == 6){
        console.clear()
        console.log(`Tchau Tchau`);
        break
    }
    switch (option) {
        case 1:
           
            novo[escolhaAluno -1].estudar();

            console.log(novo[escolhaAluno -1].status());
            break;
        case 2:
            
            novo[escolhaAluno -1].malhar();
            console.log(novo[escolhaAluno -1].status());
            break;
        case 3:
            
            novo[escolhaAluno-1].feliz()
            console.log(novo[escolhaAluno-1].status());
            break;
        case 4:
            
            novo[escolhaAluno -1].procrastinar()

            console.log(novo[escolhaAluno -1].status());
            break;
        case 5:
            
            console.log(novo[escolhaAluno -1].status());
            break;
        default:
            break;
    }
}
}



if(option == 3){

    while (true) {
        console.log(`========== Secretaria =============`);
        console.log("||1. Adicionar Aluno              ");
        console.log("||2. Adicionar Professor          ");
        console.log("||3. Informações alunos           ");
        console.log("||4. Informações Professores      ");
        console.log("||5. Sair                         ");
        console.log("=====================================");
    
        option = +teclado("Escolha uma opção: ");
        console.clear()
        if(option == 5){
              console.log(`Tchau Tchau`);
             break
       }
         switch (option) {
            case 1:
              
              newName = teclado("Digite o nome do aluno: ");
               novo.push(new Aluno(newName))
    
               console.log(`Aluno inserido com sucesso`);
                break;
            case 2 :
                newName = teclado("Digite o nome do Professor: ");
                senac.push(new Professor(newName))
      
                 console.log(`Professor inserido com sucesso`);
            break;
            case 3:
                console.clear()
                for(let c = 1;c <= novo.length;c++)
                console.log(novo[c -1].status());
                 break;
                case 4 :
                    console.clear()
                   for(let c = 1;c <= senac.length;c++)
                   console.log(senac[c -1].status());
                    break;
            
           default:
               break;
        }
     }



}
