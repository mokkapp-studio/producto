import React from 'react';
import styled from '@emotion/styled';
import { Input, Button } from 'antd';
import Link from 'next/link';

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

    const usuario = false;

    return(
        <Navbar style={ usuario ? {marginLeft: '220px', paddingRight: '220px'} : null}>
            <div className={usuario ? 'inner-navbar' : 'inner-navbar-logout' }>
                {usuario ? (
                    <>
                    <div><Input/></div>
                    <div>
                        <Button type="primary">Log out</Button>
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