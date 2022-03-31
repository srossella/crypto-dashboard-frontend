import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect , useState} from 'react';
import Card from '../components/Card/Card';
import Header from '../components/Header/Header';


export default function Balance() {
  const [error, setError] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [balance, setBalance] = useState([]);

  let navigate = useNavigate()
    
  useEffect(() => {
      let authToken = sessionStorage.getItem('Auth Token')
      if (!authToken) {
        navigate('/login')
      }
    }, [])

  useEffect(() => {
      fetch("https://crypto-dashboard-rs.herokuapp.com/balance")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setBalance(result);
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
              Users' balance
            </h1>
            <div className="flex flex-wrap flex-row m-auto justify-center  ">
              {balance.map((balanceByUser) => {
              return <Card balanceByUser={balanceByUser} key={balanceByUser.userId} />;
              })}
            </div>
          </main>
        </>
    )
    }
}
