import app from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import firebaseConfig from './config';


class Firebase {
    constructor(){
        if(!app.apps.length){
            app.initializeApp(firebaseConfig)
        }
        this.auth = app.auth();
        this.db = app.firestore();
        this.storage = app.storage();
    }

    // registrar un nuevo usuario
    async registrar(username, email, password) {
        const nuevoUsuario = await this.auth.createUserWithEmailAndPassword(email, password);

        return await nuevoUsuario.user.updateProfile({
            displayName : username
        })
    }


    // Log in

    async login(email, password){
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    // log out

    async cerrarSesion() {
        await this.auth.signOut();
    }

}

const firebase = new Firebase()

export default firebase;