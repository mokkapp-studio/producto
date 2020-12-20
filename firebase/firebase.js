import app from 'firebase';
import 'firebase/auth';
import firebaseConfig from './config';


class Firebase {
    constructor(){
        if(!app.apps.length){
            app.initializeApp(firebaseConfig)
        }
        this.auth = app.auth();
    }

    // registrar un nuevo usuario
    async registrar(username, email, password) {
        const nuevoUsuario = await this.auth.createUserWithEmailAndPassword(email, password);

        return await nuevoUsuario.user.updateProfile({
            displayName : username
        })
    }

}

const firebase = new Firebase()

export default firebase;