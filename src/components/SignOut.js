import fb from '../firebase'

const SignOut = () => {
    fb.auth().signOut().then(() => {
        alert(`you have signed out`)
    })
}

export default SignOut;