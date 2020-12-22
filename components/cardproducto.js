import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';

const Card = styled.div`
    width: 100%;
    background: #f0f0f0;
    padding: 1em;
    margin-bottom: 1em;
    display: flex;
    img{
        width: 120px;
        height: auto;
        margin-right: 1em;
    }
`;


const CardProducto = ({producto}) => {

    const [ ratioA, setRatioA ] = useState('')


    const { name, description, urlimagen, ratio1, ratio2, ratio3 } = producto;

    // function ratio(ratio2) {
    //     if(ratio2 === 90){
    //         setRatioA(ratio2 === 100)
    //     } 
    //     return
    // } 
    // ratio()
    // console.log(ratioA)

    useEffect(() =>{

        if(ratio2 === 90){
            setRatioA('Lider')
        } 
    
    },[ratio2])

    return(
        <Card>
            <img src={urlimagen}/>
            <div>
                <h3>{name}</h3>
                <p>{description}</p>
                <p>{ratio2}</p>
                <p>{ratioA}</p>
            </div>
        </Card>
        
    )
}

export default CardProducto;