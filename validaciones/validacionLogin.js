export default function validarLogin(valores){

    let errores = {};


    if(!valores.email){
        errores.email = "El email es obligaorio"
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email)){
        errores.email = "Email no válido"
    }

    if(!valores.password){
        errores.password = "El password es obligatorio";
    } else if( valores.password.length < 6){
        errores.password = "El password de tener al menos 6 caracteres."
    }

    return errores 
}

