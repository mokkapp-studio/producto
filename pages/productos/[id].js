import React, { useEffect, useState, useContext} from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { Input, Row, Col } from 'antd';
import Layout from '../../components/Layout';
import { FirebaseContext } from '../../firebase';




const ContentDash = styled.div`
    padding-top: 6em;
    padding-left: 220px;
`;

const DetalleProducto = () => {

    //
    const [ producto, setProducto ] = useState({});
     


    const router = useRouter();
    const { query: {id}} = router;

    const { usuario, firebase } = useContext(FirebaseContext);

    useEffect(() => {
        if(id) {
            const obtenerProducto = async () => {
                const productoQuery = await firebase.db.collection('productos').doc(id);
                const producto = await productoQuery.get();
                setProducto(producto.data())
            }
            obtenerProducto();
        }
    }, [id])

    const { name, description, creador, urlimagen, ratio1, ratio2, ratio3, votos, comentarios, creado } = producto;

    const votarproducto = () => {

        const nuevoTotla = votos + 1;

        setProducto({
            ...producto,
            votos: nuevoTotla
        })


    }

    if(Object.keys(producto).length === 0) return 'loading';


 
    return(
        <>  
            {usuario && 
            <Layout>
                {Object.keys(producto).length === 0 ? (
                    'loading'
                ):
                (
                    <ContentDash>
                    <h1>
                        desde detalle de producto: {id}
                    </h1>
                    <img width="220px" src={urlimagen}/>
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <p>Creado por: {creador.nombre}</p>
                    <div>
                        <Row gutter={16}>
                            <Col span={12}>
                                <form>
                                    <label>Agragar comentaeio</label>
                                    <Input
                                        type="text"
                                        name="mensaje"
                                    />
                                    <button 
                                        type="submit"
                                        value="agregar comentario"    
                                    >Comnetar</button>
                                </form>
                                <h2>Comentarios:</h2>
                                {comentarios.map(comentario => (
                                    <li>
                                        <p>comentario</p>
                                    </li>
                                ))}
                            </Col>
                            <Col span={12}>
                                <p>Votos: {votos}</p>
                                <button onClick={votarproducto}>Votar</button>
                            </Col>
                        </Row>
                        
                    </div>
                    </ContentDash>
                )}
                
            </Layout>    
            }
            
        </>
    )
}

export default DetalleProducto; 



// Copia y pega estas secuencias de comandos en la parte inferior de la etiqueta <body> antes de usar cualquier servicio de Firebase:


// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyCCTSuZKohCnceCKhrFNFoCV1YRYleL2ps",
//     authDomain: "roles-bd95e.firebaseapp.com",
//     projectId: "roles-bd95e",
//     storageBucket: "roles-bd95e.appspot.com",
//     messagingSenderId: "483247939305",
//     appId: "1:483247939305:web:a404876bd86349c3f95a78"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// </script>


// https://bluuweb.github.io/react-udemy/01-proyecto/