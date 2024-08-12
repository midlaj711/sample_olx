/*import React, { useState ,useContext} from 'react';

import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/FirebaseContext';
import {useNavigate} from 'react-router-dom'

import './Signup.css';

export default function Signup() {
    const history = useNavigate()
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [password,setPassword] = useState('');
    const {firebase} = useContext(FirebaseContext)
    const handleSubmit = (e)=>{
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
            result.user.updateProfile({displayName:username}).then(()=>{
                firebase.firestore().collection('users').add({
                    id:result.user.uid,
                    username:username,
                    phone:phone
                }).then(()=>{
                    history.push("/login")
                })
            })
        })
        }
return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit= {handleSubmit} >
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
} */

  import React, { useState, useContext } from 'react';
  import { useNavigate } from 'react-router-dom';
  import { FirebaseContext } from '../../store/FirebaseContext';
  import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
  import { addDoc, collection } from 'firebase/firestore';
  import Logo from '../../olx-logo.png';
  import './Signup.css';
  
  export default function Signup() {
      const navigate = useNavigate();
      const [username, setUsername] = useState('');
      const [email, setEmail] = useState('');
      const [phone, setPhone] = useState('');
      const [password, setPassword] = useState('');
      const { auth, db } = useContext(FirebaseContext);
  
      const handleSubmit = async (e) => {
          e.preventDefault();
  
          try {
              // Create user with email and password
              const result = await createUserWithEmailAndPassword(auth, email, password);
              
              // Update user profile
              await updateProfile(result.user, { displayName: username });
  
              // Add user data to Firestore
              await addDoc(collection(db, 'users'), {
                  id: result.user.uid,
                  username: username,
                  phone: phone
              });
  
              // Navigate to login page
              navigate("/login");
          } catch (error) {
              console.error("Error signing up:", error);
          }
      };
  
      return (
          <div>
              <div className="signupParentDiv">
                  <img width="200px" height="200px" src={Logo} alt="Logo" />
                  <form onSubmit={handleSubmit}>
                      <label htmlFor="fname">Username</label>
                      <br />
                      <input
                          className="input"
                          type="text"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          id="fname"
                          name="name"
                      />
                      <br />
                      <label htmlFor="fname">Email</label>
                      <br />
                      <input
                          className="input"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          id="fname"
                          name="email"
                      />
                      <br />
                      <label htmlFor="lname">Phone</label>
                      <br />
                      <input
                          className="input"
                          type="number"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          id="lname"
                          name="phone"
                      />
                      <br />
                      <label htmlFor="lname">Password</label>
                      <br />
                      <input
                          className="input"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          id="lname"
                          name="password"
                      />
                      <br />
                      <br />
                      <button type="submit">Signup</button>
                  </form>
                  <a href="/login">Login</a>
              </div>
          </div>
      );
  }
  