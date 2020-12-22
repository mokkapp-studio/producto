export default function validarProducto(valores){

    let errores = {};

    if(!valores.name){
        errores.name = "El nombre de proyecto es Obligatorio";
    }

    if(!valores.description){
        errores.description = "Descripcion es Obligatoria";
    }


    return errores 
}

