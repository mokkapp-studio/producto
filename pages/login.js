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
import validacionLogin from '../validaciones/validacionLogin';

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
    email: '',
    password: ''
}


const Login = () => {

    const [ terminos, setTerminos ] = useState(true)
    const [ usuarioregistrado, setUsuarioregistrado ] = useState(false);

    const {
        valores,
        errores,
        submitForm,
        handleChange,
        handleSubmit
    } = useValidacion(STATE_INICIAL, validacionLogin, iniciarSesion);


    const {  email, password } = valores

    // Función de crear un nuevo usuario en Firebase.
    async function iniciarSesion() {
        try {
            await firebase.login( email, password);
            Router.push('/dashboard');
    
           } catch (error) {
                console.error('Hubo error al hacer login', error.message);
                setUsuarioregistrado(error.message)
           }
    }



    return(
        <Layout>
            <ContainerLogin>
            <div className="inner-form">
            <h1>Log in</h1>
            <form
                onSubmit={ handleSubmit }
            >
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
                </div>
                <BTNCC type="submit" value="Acceder"/>
            </form>
            </div>
            </ContainerLogin>
            
        </Layout>
        
    )
}

export default Login;