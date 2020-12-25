import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'; 
import Link from 'next/link';


const Card = styled.div`
    width: 100%;
    background: #f0f0f0;
    padding: 1em;
    margin-bottom: 1em;
    display: flex;
    img{
        width: 120px;
        height: 50%; 
        margin-right: 1em;
    }
`;


const CardProducto = ({producto}) => {

    const [ ratioA, setRatioA ] = useState('');
    const [ añadirvotos, setAñadirvotos ] = useState(0);


    const { id, name, description, urlimagen, ratio1, ratio2, ratio3, votos, comentarios, creado } = producto;

    console.log(añadirvotos)

    // useEffect(() =>{

    //     if(ratio2 === 90){
    //         setRatioA('Lider')
    //     } 
    
    // },[ratio2])
    

    const votarproducto = () => {

        const nuevoTotal = votos + 1;

        setAñadirvotos ({
            ...votos,
            votos: nuevoTotal
        })


    }

    return(
        <Card>
            <img src={urlimagen}/>
            <div>
                <Link href="/productos/[id]" as={`/productos/${id}`}>
                    <h3>{name}</h3>
                </Link> 
                <p>{description}</p>
                <p>{ratio2}</p>
                <p>{ratioA}</p>
                <p>{votos}</p>
                <div>
                    <p>Cometarios:</p>
                    <p>{comentarios.length}</p>
                </div>
                <p>publicado hace: {formatDistanceToNow( new Date(creado))}</p>
                <p>likes: {votos}</p>
                <button onClick={votarproducto}>Votar</button>
            </div>
        </Card>
        
    )
}

export default CardProducto;