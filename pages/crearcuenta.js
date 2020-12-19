import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Form, Input, Button, Checkbox } from 'antd';
import { ContainerLogin } from '../components/UI/Formulario';
import  ErrorMessage  from '../components/UI/ErrorMessage'


// validaciones 
import useValidacion from '../hooks/useValidacion';
import validarCrearCuenta from '../validaciones/validarCrearCuenta';



const STATE_INICIAL = {
    username: '',
    email: '',
    password: ''
}


const CrearCuenta = () => {

    const {
        valores,
        errores,
        submitForm,
        handleChange,
        handleSubmit
    } = useValidacion(STATE_INICIAL, validarCrearCuenta, crearCuenta);


    const { username, email, password } = valores

    function crearCuenta() {
        console.log('Creando Cuenta...');
    }


    const [ terminos, setTerminos ] = useState(true)

    function onChangeCheck(e) {
        console.log(`checked = ${e.target.checked}`);
        setTerminos(!e.target.checked)
      }





    return(
        <Layout>
            <ContainerLogin>
            <div className="inner-form">
            <h1>Crear cuenta</h1>
            <Form
                size="large"
                layout="vertical"
                onFinish={ handleSubmit }
                //name="basic"
                //onFinishFailed={onFinishFailed}
                >
                <Form.Item
                    label="Username"
                >
                    <Input
                        name="username"
                        id="username"
                        value={username}
                        onChange={handleChange}
                    />
                </Form.Item>
                {errores.username && <ErrorMessage mensaje={errores.username}/>}
                <Form.Item
                    label="Email"
                >
                    <Input
                        name="email"
                        id="email"
                        value={email}
                        onChange={handleChange}
                    />
                </Form.Item>
                {errores.email && <ErrorMessage mensaje={errores.email}/>}
                <Form.Item
                    label="Password"
                >
                    <Input.Password 
                        name="password"
                        id="password"
                        value={password}
                        onChange={handleChange}
                    />
                </Form.Item>
                {errores.password && <ErrorMessage mensaje={errores.password}/>}
                <Form.Item  name="remember">
                    <Checkbox
                        onChange={onChangeCheck}
                    >Aceptar términos y condiciones</Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button disabled={terminos} type="primary" htmlType="submit">
                        Crear Cuenta
                    </Button>
                </Form.Item>
            </Form>
            </div>
            </ContainerLogin>
            
        </Layout>
        
    )
}

export default CrearCuenta;