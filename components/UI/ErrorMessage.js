import React from 'react';
import styled from '@emotion/styled';
import { WarningOutlined } from '@ant-design/icons';


const ErrorMSN = styled.div`
    display: flex;
    width: 100%;
    span{
        color: red;
    }
`;

const Span = styled.span`
    color: red;
    font-size: 12px;
    font-weight: 400;
`;

const ErrorMessage = ({mensaje}) => {

    return(
        <ErrorMSN>
        <Span>{mensaje}</Span>
        </ErrorMSN>
    ) 
}

export default ErrorMessage