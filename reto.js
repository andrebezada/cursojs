// hacer un juego de piedra, papel, tijeras 
// generar variables, una funcion, una validacion

var op1 = 'piedra'
var op2 = 'papel'
var op3 = 'tijera'

var resultado = function(user,cpu){
    if(user != cpu) {
        if( user === op1 && cpu === op3){
            console.log('el usuario gano')
        }
        if( user === op2 && cpu === op1){
            console.log('el usuario gano')
        }
        if( user === op3 && cpu === op2){
            console.log('el usuario gano')
        }
        else {
            console.log('la cpu gano')
        }

    } else if(user === cpu){
        console.log('empate!')
    }
    }

resultado(op1,op3) 
