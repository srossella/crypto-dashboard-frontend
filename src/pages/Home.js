import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import Table from '../components/Table';
import Header from '../components/Header/Header';

export default function Home() {
  const [error, setError] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  let navigate = useNavigate()

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    if (!authToken) {
      navigate('/login')
    }
  }, [])

  useEffect(() => {
    fetch("https://crypto-dashboard-rs.herokuapp.com/transactions")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div><Header/><p style={{textAlign:'center', marginTop:'20px'}}>Error: {error.message}</p></div>;
  } else if (!isLoaded) {
    return <div><Header/><p style={{textAlign:'center', marginTop:'20px'}}>Loading...</p></div>;
  } else {
    return (
      <> 
      <Header/>
          <main>
              <h1 className="m-auto uppercase text-teal-700 flex justify-center text-2xl font-bold mb-5 mt-5">
                Transactions list
              </h1>
                <Table transactions={items} />
          </main>
      
        
      </>
       
    )
  }
}
