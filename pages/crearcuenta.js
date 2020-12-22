import React, { useState } from 'react';
import Router from 'next/router';
import Layout from '../components/Layout';
import { Input, Checkbox } from 'antd';
import styled from '@emotion/styled';
import { ContainerLogin } from '../components/UI/Formulario';
import  ErrorMessage  from '../components/UI/ErrorMessage';

import firebase from '../firebase'
// validaciones 
import useValidacion from '../hooks/useValidacion';
import validarCrearCuenta from '../validaciones/validarCrearCuenta';


const BTNCC = styled.input`
    width: 100%;
    height: 3em;
    border: none;
    background: #39a8af;
    color: white;
    text-transform: uppercase;
    font-size: 14px;
`;


const STATE_INICIAL = {
    username: '',
    email: '',
    password: ''
}


const CrearCuenta = () => {

    const [ terminos, setTerminos ] = useState(true)
    const [ usuarioregistrado, setUsuarioregistrado ] = useState(false);

    const {
        valores,
        errores,
        submitForm,
        handleChange,
        handleSubmit
    } = useValidacion(STATE_INICIAL, validarCrearCuenta, crearCuenta);


    const { username, email, password } = valores

    // Función de crear un nuevo usuario en Firebase.
    async function crearCuenta() {
       try {
        await firebase.registrar(username, email, password);
        Router.push('/dashboard');

       } catch (error) {
            console.error('Hubo error al crear usuario', error.message);
            setUsuarioregistrado(error.message)
       }

    }


    // UseState para validar la aceptación de terminos y habilitar el botón de crear cuenta

   

    function onChangeCheck(e) {
        console.log(`checked = ${e.target.checked}`);
        setTerminos(!e.target.checked)
      }





    return(
        <Layout>
            <ContainerLogin>
            <div className="inner-form">
            <h1>Crear cuenta</h1>
            <form
                onSubmit={ handleSubmit }
            >
                <div className="section-form">
                    <label htmlFor="username">User Name</label>
                    <p> {errores.username && <ErrorMessage mensaje={errores.username}/>}</p>
                    <Input
                        placeholder="User Name"
                        size="large"
                        type="text"
                        name="username"
                        id="username"
                        value={username}
                        onChange={handleChange}
                    />
                </div>
                <div className="section-form">
                    <label htmlFor="email">E-mail</label>
                    <p>{errores.email && <ErrorMessage mensaje={errores.email}/>}</p>
                    <Input
                        placeholder="example@example.com"
                        size="large"
                        type="text"
                        name="email"
                        id="email"
                        value={email}
                        onChange={handleChange}
                    />
                </div>
                <div className="section-form">
                    <label htmlFor="username">Password</label>
                    <p>{errores.password && <ErrorMessage mensaje={errores.password}/>}</p>
                    <Input
                        placeholder="Password"
                        size="large"
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={handleChange}
                    />
                </div>
                <div className="section-form">
                <Checkbox onChange={onChangeCheck}>Términos y condiciones</Checkbox>
                </div>
                <BTNCC disabled={terminos} type="submit" value="Create"/>
                <br/>
                <p>{usuarioregistrado && <ErrorMessage mensaje={usuarioregistrado}/>}</p>
            </form>
            </div>
            </ContainerLogin>
            
        </Layout>
        
    )
}

export default CrearCuenta;