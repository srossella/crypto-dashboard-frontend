import React from 'react'
import { Link } from 'react-router-dom';
import  Form  from '../components/Form/Form'
import Header from '../components/Header/Header';

export default function Reset({setPassword, setEmail,handleAction}) {

    return (
        <>
        <Header/>
        <div >
            <Form
                title="Reset password"
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={handleAction}
              />
              <div className='form-links'>
                <Link to='/login'>
                    Back to login
                </Link>
                <Link to='/register'>
                    Create new account
                </Link>
              </div>
        </div>
        </>
    )
}
