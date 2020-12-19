import React from 'react';
import Link from 'next/link';
import { Menu, Button } from 'antd';
import {
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,

  } from '@ant-design/icons';


const { SubMenu } = Menu;

const Sidebar = () => {

    const usuario = false;

    return(
    <>
        {usuario ? (
            <div style={{ width: '220px', height: '100vh', position: 'fixed' }}>
                <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                style={{height: '100%', background: '#e8e8e8', paddingTop: '6em'}}
                >
                <Menu.Item  key="1" icon={<PieChartOutlined style={{color: '#232323'}} />}>
                    <Link href="/">
                        <span style={{color: '#232323'}}>Home</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<DesktopOutlined style={{color: '#232323'}}  />}>
                    <Link href="/projects">
                        <span style={{color: '#232323'}}>Projects</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<ContainerOutlined style={{color: '#232323'}}  />}>
                    <Link href="/settings">
                        <span style={{color: '#232323'}}>Settings</span>
                    </Link>   
                </Menu.Item>
                </Menu>
            </div>
        ) : null
        }
    </>
    )
   
}

export default Sidebar