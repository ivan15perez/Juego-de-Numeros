//variables
let numeroSecreto = Math.floor(Math.random()*10)+1;

let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez'
while(numeroUsuario!= numeroSecreto){
    numeroUsuario = parseInt(prompt("Me indicas un numero entre 1 y 10 por favor:"));
//    console.log(typeof(numeroUsuario));

        if (numeroSecreto==numeroUsuario) {
            //Acertamos, fue verdadera la condicion
                alert(`Acertaste, el Numero es: ${numeroUsuario}, lo hiciste en ${intentos} ${intentos==1? 'vez':'veces'}`);
            } else {
                if(numeroUsuario>numeroSecreto){
                    alert("El numero secreto es menor");
                }else{
                    alert("El numero secreto es mayor");
                }
            intentos = intentos + 1;
   //         palabraVeces = 'veces'
                if (intentos>3){
                    alert(`Llegaste al numero maximo de ${intentos-1} intentos`);
                    break;
                }
            }
    }