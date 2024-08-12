
/*import React,{useState,useContext} from 'react';
import { FirebaseContext} from '../../store/FirebaseContext'
import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')
    const {firebase} = useContext(FirebaseContext)
    const handleLogin = (e)=>{
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
            alert('Login successfull')
        }).catch((error)=>{
            alert(error.message)
        })
        

    }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            id="fname"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            id="lname"
            onChange={(e)=> setPassword(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
*/
import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../../store/FirebaseContext';
import Logo from '../../olx-logo.png';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { auth } = useContext(FirebaseContext);

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                alert('Login successful');
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    return (
        <div>
            <div className="loginParentDiv">
                <img width="200px" height="200px" src={Logo} alt="Logo" />
                <form onSubmit={handleLogin}>
                    <label htmlFor="fname">Email</label>
                    <br />
                    <input
                        className="input"
                        type="email"
                        value={email}
                        id="fname"
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        defaultValue="John"
                    />
                    <br />
                    <label htmlFor="lname">Password</label>
                    <br />
                    <input
                        className="input"
                        type="password"
                        value={password}
                        id="lname"
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        defaultValue="Doe"
                    />
                    <br />
                    <br />
                    <button>Login</button>
                </form>
                <a href="/signup">Signup</a>
            </div>
        </div>
    );
}

export default Login;
