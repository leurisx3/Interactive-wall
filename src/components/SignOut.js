import fb from '../firebase'

const SignOut = () => {
    fb.auth().signOut().then(() => {
        console.log(`you have signed out`)
    })
}

export default SignOut;