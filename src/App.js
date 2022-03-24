
import './App.css';
import { useState } from 'react';
import { Routes, Route, useNavigate, Navigate} from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Balance from './pages/Balance';
import Home from './pages/Home';
import Login from './pages/Login';
import CreateTrx from './pages/CreateTrx';
import Register from './pages/Register';
import Reset from './pages/Reset';
import { app } from './firebase-config';

function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();
 
  const handleAction = (id) => {
    
    const authentication = getAuth();
    if (id === 'login') {
      
      signInWithEmailAndPassword(authentication, email, password)
        .then((res) => {
          navigate('/')
          sessionStorage.setItem('Auth Token', res._tokenResponse.refreshToken)
        })
        .catch((error) => {
          console.log(error.code)
          if (error.code === 'auth/wrong-password') {
            toast.error('Please check the password');
          }
          else if (error.code === 'auth/user-not-found') {
            toast.error('Please check the email');
          }else{
            toast.error('Please check the email and the password')
          }
        })
    }
    if (id === 'register') {
      console.log('name is '+ email +'password is '+password)
      createUserWithEmailAndPassword(authentication, email, password)
        .then((res) => {
          navigate('/')
          sessionStorage.setItem('Auth Token', res._tokenResponse.refreshToken)
        })
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            toast.error('No email or email already in use');
          }else{
            toast.error('Please try again with a stronger email');
          }
        })
    }
    if (id === 'reset') {
      sendPasswordResetEmail(authentication, email)
        .then((res) => {
          navigate('/login')
          toast.error('Email sent');
        })
        .catch((error) => {
            toast.error('Please check your email!');
        })
    }
  }


  return (
    <>
        <ToastContainer />
        
        <Routes>
        <Route
            path='/login'
            element={
              <Login
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={() => handleAction('login')}
              />}
          />
          <Route
            path='/register'
            element={
              <Register
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={() => handleAction('register')}
              />}
          />
            <Route
            path='/reset'
            element={
              <Reset
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={() => handleAction('reset')}
              />}
          />

           <Route
            exact path='/'
            element={<Home/>}
          />
          <Route
            path='/balance'
            element={<Balance />}
          />
          <Route
            path='/createtrx'
            element={<CreateTrx />}
          />
            <Route
              path='*' element={<Navigate replace to="/" />} />
        </Routes>
        
  
    </>
  );
}

export default App;
