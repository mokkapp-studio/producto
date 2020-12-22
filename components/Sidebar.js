import React, { useContext }  from 'react';
import Link from 'next/link';
import { FirebaseContext } from '../firebase';
import styled from '@emotion/styled';

const MenuSidebar = styled.div`
    width: 220px;
    height: 100vh;
    position: fixed;
    background: #e8e8e8;
    .inner-menu-sidebar{
        .logo{
            width: 100%;
            padding: 1em;
            height: 5em;
            text-align: center;
        }
        .ul-list{
            padding-top: 3em;
            display: flex;
            flex-direction: column;
            a{
                height: 3em;
                padding: 1em;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                ${props =>
                    props.active &&
                    'background-color: #d9e9fb; color: #444; font-weight: 500;'
            }
        }
    }
`;




const Sidebar = () => {

    const { usuario, firebase } = useContext(FirebaseContext);

    return(
    <>
        {usuario ? (
            // <div style={{ width: '220px', height: '100vh', position: 'fixed' }}>
            //     <Menu
            //     defaultSelectedKeys={['1']}
            //     defaultOpenKeys={['sub1']}
            //     mode="inline"
            //     theme="dark"
            //     style={{height: '100%', background: '#e8e8e8', paddingTop: '6em'}}
            //     >
            //     <Menu.Item  key="1" icon={<PieChartOutlined style={{color: '#232323'}} />}>
            //         <Link href="/">
            //             <span style={{color: '#232323'}}>Home</span>
            //         </Link>
            //     </Menu.Item>
            //     <Menu.Item key="2" icon={<DesktopOutlined style={{color: '#232323'}}  />}>
            //         <Link href="/projects">
            //             <span style={{color: '#232323'}}>Projects</span>
            //         </Link>
            //     </Menu.Item>
            //     <Menu.Item key="3" icon={<ContainerOutlined style={{color: '#232323'}}  />}>
            //         <Link href="/settings">
            //             <span style={{color: '#232323'}}>Settings</span>
            //         </Link>   
            //     </Menu.Item>
            //     </Menu>
            // </div>  servicioatencioncliente@grupobbva.com
            <MenuSidebar>
               <div className="inner-menu-sidebar">
                    <div className="logo">
                        <h1>Logotipo</h1>
                    </div>
                    <nav className="ul-list">
                        <Link href={'/settings'} >
                            Home
                        </Link>
                        <Link href="/nuevoproyecto" >
                            Nuevo Producto
                        </Link>
                    </nav>
               </div>
            </MenuSidebar>
        ) : null
        }
    </>
    )
   
}

export default Sidebar