import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { Input, Button } from 'antd';
import Link from 'next/link';
import { FirebaseContext } from '../firebase';

const Navbar = styled.header`
    background: #fff;
    -webkit-box-shadow: -2px 2px 5px 0px #e6e6e6; 
    box-shadow: -2px 2px 5px 0px #e6e6e6;
    width: 100%;
    position: fixed;
    height: 5em;
    .inner-navbar{
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1em;
    }
    .inner-navbar-logout{
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 1em;
    }
`

const Header = () => {

    const { usuario, firebase } = useContext(FirebaseContext);

    

    return(
        <Navbar style={ usuario ? {marginLeft: '220px', paddingRight: '220px'} : null}>
            <div className={usuario ? 'inner-navbar' : 'inner-navbar-logout' }>
                {usuario ? (
                    <>
                    <div><Input/></div>
                   
                    <div>
                        {/* <p>{usuario.displayName}</p> */}
                        <Button onClick={() => firebase.cerrarSesion()} type="primary">
                            <Link href="/">
                            Log out
                            </Link>
                        </Button>
                    </div>
                    </>
                )
                :
                (
                    <div>
                        <Button type="primary">
                            <Link href="/login">Log in</Link>
                        </Button>
                        <Button style={{marginLeft: '1em'}} type="primary">
                            <Link href="/crearcuenta">Create Account</Link>
                        </Button>
                    </div>
                    
                )}                   
            </div>
        </Navbar>
    )
}

export default Header;