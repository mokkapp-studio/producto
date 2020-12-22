import React, {useEffect, useState, useContext} from 'react';
import Layout from '../components/Layout';
import CardProducto from '../components/cardproducto';
import { FirebaseContext } from '../firebase';
import styled from '@emotion/styled';
import { Progress } from 'antd';

const ContentDash = styled.div`
    padding-top: 6em;
    padding-left: 220px;
`;

const Dashboard = () => {

    const [productos, setProductos] = useState([]);

    const { firebase } = useContext(FirebaseContext);

    useEffect(() => {
        const obtenerProductos = () => {
            firebase.db.collection('productos').orderBy('creado', 'desc').onSnapshot(manejarSnapshot)
        }
        obtenerProductos();
    }, []);

    function manejarSnapshot(snapshot) {
        const productos = snapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data()
            }
        });

     setProductos(productos)
    }

    console.log(productos)

    return(
        <Layout>
            <ContentDash>
            <h1>Dashboard</h1>
            <div>
            {productos.map(producto => (
                <CardProducto 
                    key={producto.id}
                    producto={producto}
                >
                    {/* <p>{producto.name}</p>
                    <img width="120px" src={producto.urlimagen}/>
                    <Progress percent={producto.ratio2} showInfo={false} /> */}
                </CardProducto>
            ))}
            </div>
            </ContentDash>
        </Layout>
    )
}

export default Dashboard;