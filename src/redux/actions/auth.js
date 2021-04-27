import { firebase, googleAuthProvider } from '../../firebase/config-firebase'
import { types } from "../types/types"
import { uifinishLoading, uiStartLoading } from './ui'




export const startRegister = (name, email, password) => {
    return (dispatch) => {

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {

                await user.updateProfile({ displayName: name })
                dispatch(login(user.uid, user.displayName))
            })
            .catch(e => {
                console.log(e, 'usuario ya existe con ese email');
            })
    }
}


export const signIn = (email, pasword) => {
    return (dispatch) => {

        dispatch(uiStartLoading())

        firebase.auth().signInWithEmailAndPassword(email, pasword)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName))
                dispatch(uifinishLoading())
            }

            )
            .catch(e => {
                console.log(e, 'error al iniciar sesion');
            })
    }
}


export const googleSignIn = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName))
            })
            .catch(e => {
                console.log(e, 'error al iniciar sesion');
            })
    }
}






export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid, displayName
        }
    }
}

export const cerrarSesion = () => {
    return (dispatch) => {
        firebase.auth().signOut()
        dispatch(logout())
    }
}

const logout = () => ({ type: types.logout })