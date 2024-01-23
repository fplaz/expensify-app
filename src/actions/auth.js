import {provider, auth, signInWithPopup, signOut} from '../firebase/firebase'

export const login = (uid) => ({
    type: 'LOGIN',
    uid
})

export const startLogin = () => {
    return () => {
        try {
            return signInWithPopup(auth, provider)
        }
        catch(e) {
            console.log('startLogIn error:' + e)
        }
    }
}

export const logout = () => ({
    type: 'LOGOUT'
})

export const startLogout = () => {
    return () => {
        try {
            return signOut(auth)
        }
        catch(e) {
            console.log('startLogout error:' + e)
        }
    }
}