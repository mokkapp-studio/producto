import React, { Fragment } from 'react';
import Head from 'next/head';
import Sidebar from './Sidebar'
import Header from './Header'
import styled from '@emotion/styled';

const Main = styled.main`
    padding: 1em;
    &.log-in{
        margin-left: 220px;
        padding-top: 7em;
    }
    &.log-out{
        margin-left: 0;
        padding-top: 0;
    }
`;

const Layout = props => {

    const usuario = false;

    return(
        <Fragment>
            <Head>
                <html lang="es"/>
            </Head>
            <Header/>
            <Sidebar/>
            <Main className={usuario ? "log-in" : "log-out"}>
                {props.children}
            </Main>

        </Fragment>
    )
}

export default Layout;