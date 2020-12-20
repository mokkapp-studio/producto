import '../styles/globals.scss';
import 'antd/dist/antd.css';
import App from 'next/app';
import firebase, { FirebaseContext } from '../firebase';

const MyApp = ({ Component, pageProps }) => {


  

  return (

    <FirebaseContext.Provider
      value={{
        firebase
      }}
    >
       <Component {...pageProps} />
    </FirebaseContext.Provider>
  )
}

export default MyApp
