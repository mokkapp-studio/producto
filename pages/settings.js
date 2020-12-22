import React, { useContext } from 'react';
import Layout from '../components/Layout';
import { FirebaseContext } from '../firebase';

const Settings = () => {

    const { usuario, firebase } = useContext(FirebaseContext);

    return(
        <>
        {usuario &&
        <Layout>
            <h1>Settings</h1>
        </Layout>
        }
        </>
    )
}

export default Settings;