import React from 'react'
import { useNavigate,Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import  Form  from '../components/Form/Form'
import Header from '../components/Header/Header';

export default function Login({setPassword, setEmail,handleAction}) {

let navigate= useNavigate()

useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken) {
      navigate('/')
    }
}, [])

    return (
        <>
        <Header/>
        <div className='login-container'>
           
            <Form
                title="Login"
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={handleAction}
              />
              <div className="form-links">
                <Link to='/reset'>
                    Forgot your password?
                </Link>
                <Link to='/register'>
                    Create new account
                </Link>
              </div>
        </div>
        </>
    )
}
