// Pedir para o usuário digitar quantas palavras serão analisadas


// Função analisa se a palavra é ordenada ou não e retorna "O" ou "N". 

var readlineSync = require("readline-sync");
numeroDePalavras =(readlineSync.question("Quantas palavras serão analisadas? "));

// Função pede essas palavras até o limite indicado pelo usário.

for ( let i = 0; i < numeroDePalavras; i++){
    
    //console.log("Digite a palavra " + (i+1) + ": ")
    console.log(`Digite a palavra ${i+1}:`);
    // Cada palavra deve ser passada para minúscula
    const palavra = readlineSync.prompt().toLowerCase();    
    
    if (analisadora(palavra)){
        console.log("A palavra é ordenada.");
    }else{
        console.log("A palavra não é ordenada.");
    }
    //myOrder(palavra)
}



// Função que analisa caso a função não seja ordenada
function analisadora(palavraPrompt){
    console.log(palavraPrompt);
    let ehOrdenada = true;
    for ( let j = 0; j < (palavraPrompt.length); j++){
        if(palavraPrompt[j] > palavraPrompt[j+1] ){
          ehOrdenada = false;
          
        }else{
          ehOrdenada = true;
        }
    }
    return ehOrdenada;
}




/*function myOrder(palavraOrdenada){
    let contador = 0;
    for ( let k = 0; k < (palavraOrdenada.length - 1) ; k++){
        //palavraOrdenada = palavraVazia;
        if(palavraOrdenada[k] < palavraOrdenada[k+1]){
            contador++;
                
        }
           
    } 
    if( contador == palavraOrdenada.length -1 ){
            
        console.log("A palavra " + palavraOrdenada + " é ordenada");

    }else {
        
        console.log("A palavra " + palavraOrdenada + " não é ordenada");
    
    }
}*/
