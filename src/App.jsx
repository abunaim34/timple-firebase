import { signInWithPopup, getAuth, GoogleAuthProvider } from "firebase/auth";
import './App.css'
import app from "./firebase/firebase.config"
import { useState } from "react";

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()


function App() {
  const [user, setUser] = useState({})

  const handleGoogleSignIn =() =>{
    signInWithPopup(auth, googleProvider)
    .then(result => {
      const loggedUser = result.user
      console.log(loggedUser);
      setUser(loggedUser)
    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
    <>
      <h1>Vite + React</h1>
      <button onClick={handleGoogleSignIn}>Google sign in</button>
      {user && 
       <div className="card">
        <h4>User : {user.displayName}</h4>
        <p>Email : {user.email}</p>
       </div>
      }
    </>
  )
}

export default App
