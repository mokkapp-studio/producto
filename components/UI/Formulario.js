import styled from '@emotion/styled';

export const ContainerLogin = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: left;
    .inner-form{
        padding: 1em;
        -webkit-box-shadow: 0px 2px 5px 0px #e6e6e6; 
        box-shadow: 0px 2px 5px 0px #e6e6e6;
        border: 1px solid #fff;
        border-radius: 3px;
        &:hover{
            box-shadow: 0px 2px 10px 0px #e6e6e6;
            -webkit-box-shadow: 0px 2px 10px 0px #e6e6e6;
        }
    }

`;