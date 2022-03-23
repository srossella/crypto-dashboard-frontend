import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect , useState} from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card/Card'
import Header from '../components/Header/Header';
import axios from 'axios';
import {  toast } from 'react-toastify';


export default function CreateTrx() {
  const [trx, setTrx] = useState({
    nature:"DEPOSIT",
    asset:'BTC'
  });

  let navigate = useNavigate()
  useEffect(() => {
      let authToken = sessionStorage.getItem('Auth Token')
      if (!authToken) {
        navigate('/login')
      }
    }, [])

  const submitForm = async (e) => {
      e.preventDefault() 
      const formData = new FormData(e.currentTarget);
      const form = {
        nature: formData.get('nature'),
        amount: formData.get('amount'),
        userId: formData.get('userId'),
        asset: formData.get('asset'),
      };
      try {
        const { data } = await axios.post("http://localhost:3081/transactions", form);
        console.log(data)
        toast.success('Transaction created!')
        setTrx({
          nature:"DEPOSIT",
          asset:'BTC'
        })
        navigate('/')
      } catch {
        toast.error('Something went wrong. Try again!')
      }
    
  }

    return (
        <>
          <Header/>
          <main>
            <h1 className="m-auto uppercase text-teal-700 flex justify-center text-2xl font-bold mb-5 mt-5">
              Post a new transaction
            </h1>
            <form method="post"  onSubmit={submitForm} id="formElem" className="w-full max-w-lg m-auto">
              <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                    nature
                  </label>
                  <div className="relative">
                    <select name="nature" onChange={(e) => setTrx({...trx, nature: e.target.value})} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" >
                      
                      <option value="DEPOSIT">Deposit</option>
                      <option value="INTEREST">Interest</option>
                      <option value="REWARD">Reward</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                    user Id
                  </label>
                  <input pattern="u+[0-9][0-9]?" title="from u0 to u99"  required name="userId" onChange={(e) => setTrx({...trx, userId: e.target.value})} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" placeholder=""/>
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                    amount
                  </label>
                  <input min="0" required name="amount" onChange={(e) => setTrx({...trx, amount: e.target.value})} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="number" placeholder=""/>
                </div>
                
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                    Asset
                  </label>
                  <div className="relative">
                    <select name="asset" onChange={(e) => setTrx({...trx, asset: e.target.value})} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" >
                      <option value="BTC">BTC</option>
                      <option value="ETH">ETH</option>
                      <option value="DOT">DOT</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
              </div>
              <input type="submit" className="flex-shrink-0 w-fit m-auto bg-teal-700 hover:bg-teal-900 border-teal-700 hover:border-teal-900 text-md border-4 text-white py-1 px-2 rounded mt-4"/>
            </form>
          </main>
        </>
    )
    
}
