import '../styles/globals.scss';
import 'antd/dist/antd.css';
import App from 'next/app';
import firebase, { FirebaseContext } from '../firebase';
import useAutenticacion from '../hooks/useAutenticacion'

const MyApp = ({ Component, pageProps }) => {


  const usuario = useAutenticacion();


  return (

    <FirebaseContext.Provider
      value={{
        firebase,
        usuario
      }}
    >
       <Component {...pageProps} />
    </FirebaseContext.Provider>
  )
}

export default MyApp
