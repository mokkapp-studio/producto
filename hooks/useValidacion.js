import React, { useEffect, useState } from 'react';

const useValidacion = (stateInicial, validar, fn) => {

    const [ valores, setValores ] = useState(stateInicial);
    const [ errores, setErrores ] = useState({});
    const [ submitForm, setSubmitForm ] = useState(false);


    useEffect(() => {
        if(submitForm){
            const noErrores = Object.keys(errores).length === 0;

            // Si no hay errores - ejecuta la función que se ejecuta en el componente.
            if(noErrores){
                fn();
            }

            setSubmitForm(false)
        }
    }, [errores])


    const handleChange = e => {
        setValores({
            ...valores,
            [e.target.name]: e.target.value
        })
    }

    // Función que se ejecuta cuando se hace el submit

    const handleSubmit = e => {
        e.preventDefault();
        console.log('Success:', valores);
        const erroresValidacion = validar(valores);
        setErrores(erroresValidacion);
        setSubmitForm(true);
        return false;
    }

    return {
        valores,
        errores,
        submitForm,
        handleChange,
        handleSubmit
    }

}

export default useValidacion;


// Object.keys - Se utiliza para revisar un objeto. Como Errores es un objeto hay que revisar varios campos.
