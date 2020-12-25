import React, { useState, useContext } from 'react';
import Router, { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { Input, notification } from 'antd';
import styled from '@emotion/styled';
import { ContainerLogin } from '../components/UI/Formulario';
import  ErrorMessage  from '../components/UI/ErrorMessage';


import { FirebaseContext } from '../firebase';
import FileUploader from "react-firebase-file-uploader"
// validaciones 
import useValidacion from '../hooks/useValidacion';
import validarProducto from '../validaciones/validarProducto';
import Password from 'antd/lib/input/Password';


const { TextArea } = Input;

const openNotification = () => {
    notification.open({
      message: 'Has creado correctamente',
      description:
        'Esto es el body de la notificación',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };


const BTNCP = styled.input`
    width: 100%;
    height: 3em;
    border: none;
    background: cyan;
    color: white;
    text-transform: uppercase;
    font-size: 14px;
`;


const STATE_INICIAL = {
    name: '',
    description: ''
}


const ContentDash = styled.div`
    padding-top: 6em;
    padding-left: 220px;
`;

const NuevoProyecto = () => {

    // States para validar y enviar la imgen al storage.
    const [nombreimagen, guardarNombre] = useState('');
    const [subiendo, guardarSubiendo] = useState(false);
    const [ progreso, guardarProgreso ] = useState(0);
    const [urlimagen, guardarUrlImagen] = useState('');
   
   
    const [error, setError] = useState(false);
   
    const {
        valores,
        errores,
        handleChange,
        handleSubmit,
        handleBlur
    } = useValidacion(STATE_INICIAL, validarProducto , crearProducto);


   
    const { name,  imagen, description } = valores;
   
    //hook de routing para redireccionar
    const router = useRouter();
    // Context con las operaciones crud de firebase
    const { usuario, firebase } = useContext(FirebaseContext);
   
    async function crearProducto(){
        // si el usuario no esta autenticado llavar al login
        if(!usuario){
            return router.push('/login');
        }
   
        //crear el objeto de nuevo producto
        const producto = {
          name, 
          urlimagen,
          description,
          votos: 0,
          comentarios: [],
          creado: Date.now(),
          ratio1: 0,
          ratio2: 10,
          ratio3: 0,
          creador: {
              id: usuario.uid,
              nombre: usuario.displayName
          }
      }
   
      // insertarlo en la base de datos
      
      firebase.db.collection('productos').add(producto);

      router.push('/dashboard')

      openNotification();
      
    }
   
   
  const handleUploadStart = () => {
      guardarProgreso(0);
      guardarSubiendo(true);
  }
   
  const handleProgress = async (progreso, task) => {
      console.log(progreso);
      guardarProgreso(progreso);
      if(progreso === 100){
          handleUploadSuccess(task.snapshot.ref.name);
      }
  }
   
  const handleUploadError = error => {
      guardarSubiendo(error);
      console.error(error);
  }
   
  const handleUploadSuccess = async nombre => {
      guardarProgreso(100);
      guardarSubiendo(false);
      guardarNombre(nombre);
      await firebase.
          storage
          .ref("productos")
          .child(nombre)
          .getDownloadURL()
          .then((url) => {
              console.log(url);
              guardarUrlImagen(url);
          });
      
  };


    return(
        <>
        {usuario &&
        <Layout>
            <ContentDash>
            <h1>Nuevo Proyecto</h1>
            <ContainerLogin>
            <div className="inner-form">
            <h1>Crear nuevo proyecto</h1>
            <form
                onSubmit={ handleSubmit }
            >
                <div className="section-form">
                    <label htmlFor="username">Nombre:</label>
                    <p> {errores.name && <ErrorMessage mensaje={errores.name}/>}</p>
                    <Input
                        placeholder="User Name"
                        size="large"
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={handleChange}
                    />
                </div>
                <div className="section-form">
                    <label htmlFor="username">Imagen:</label>
                    <p> {errores.name && <ErrorMessage mensaje={errores.name}/>}</p>
                    <FileUploader 
                        accept="image/*"
                        name="imagen"
                        id="imagen"
                        randomizeFilename
                        storageRef={firebase.storage.ref("productos")}
                        onUploadStart={handleUploadStart}
                        onUploadError={handleUploadError}
                        onUploadSuccess={handleUploadSuccess}
                        onProgress={handleProgress}
                    />
                    {/* <Upload name="logo" action="/upload.do" listType="picture">
                        <Button>Subir imagen</Button>
                    </Upload> */}
                </div>
                <div className="section-form">
                    <label htmlFor="description">Descripción:</label>
                    <p> {errores.description && <ErrorMessage mensaje={errores.description}/>}</p>
                    <TextArea 
                        rows={4}
                        placeholder="description"
                        size="large"
                        type="text-area"
                        name="description"
                        id="description"
                        value={description}
                        onChange={handleChange}
                    />
                </div>
                <BTNCP  type="submit" value="Create"/>
                <br/>
            </form>
            </div>
            </ContainerLogin>
            </ContentDash>
        </Layout>
        }
        </>
    )
}

export default NuevoProyecto;




// nueva red: 

// nueva nombre de wifi: VODAFONE84 / VODAFONE84_G5


// Password: pilar1955
