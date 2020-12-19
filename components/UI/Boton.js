import styled from '@emotion/styled';

const BtnLog = styled.button`
    font-weight: 500;
    text-transform: upercase;
    border: 1px solid #d8d8d8;
    padding: .8rem 2rem;
    margin-right: 1rem;
    background: ${props => props.bgColor ? 'red' : 'blue' }
    color: ${props => props.bgColor ? 'green' : 'grey'}

    &:last-of-type {
        margin-right:0;
    }
`;

export default BtnLog;