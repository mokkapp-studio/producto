import React from 'react';
import styled from '@emotion/styled';
import { WarningOutlined } from '@ant-design/icons';


const ErrorMSN = styled.div`
    display: flex;
    margin-top: -1.2em;
    span{
        color: red;
        margin: .5em;
    }
`

const Span = styled.span`
    color: red;
    font-size: 12px;
    font-weight: 400;
`;

const ErrorMessage = ({mensaje}) => {

    return(
        <ErrorMSN>
        <WarningOutlined />
        <Span>{mensaje}</Span>
        </ErrorMSN>
    ) 
}

export default ErrorMessage