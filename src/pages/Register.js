import React from 'react'
import Form from '../components/Form/Form'
import Header from '../components/Header/Header';
import {Link}  from 'react-router-dom';

export default function Register({setPassword, setEmail,handleAction}) {

    return (
        <>
        <Header/>
        <div>
           
            <Form
                title="Register"
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={handleAction}
              />
              <div className='form-links'>
                <Link to='/login'>
                    Back to login
                </Link>
              </div>
        </div>
        </>
    )
}
