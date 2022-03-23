import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, NavLink, Link } from 'react-router-dom';
import styles from './Header.module.css'
import menu from "../../assets/menu-button.png"
import close from "../../assets/close (1).png"

export default function Header() {
    const [loggedIn, setloggedIn] = useState(true);
    const [toggle, setToggle] = useState(false)
    
    let navigate = useNavigate()
    
    const handleLogOut = () => {
      sessionStorage.removeItem('Auth Token');
      setloggedIn(false);
      navigate('/login')
    }

    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')

        if (!authToken) {
          setloggedIn(false)       
        }
      }, [])

if(loggedIn){
  return (
    <>
      <div className={styles.toggle} onClick={() => (setToggle(!toggle), console.log(toggle))}>
      {
      toggle? 
      <img src={close} width='30' height='30' alt="close icon"/>
      : 
      <img src={menu} width='30' height='30' alt="menu icon"/>
      }
      </div>
      <header className={toggle ? styles.open : styles.close}> 
            <Link to='/' >
                <h1>CRYPTO DASHBOARD </h1>
            </Link>
           <nav>
            <ul>
              
              <li>
                <NavLink  style={({ isActive }) => 
                      (isActive ? {fontWeight: '700',
                        borderBottom: '5px solid var(--primary-color)',
                        paddingBottom: '5px'} : {})}  to="/">
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink  
                  style={({ isActive }) => 
                      (isActive ? {fontWeight: '700',
                        borderBottom: '5px solid var(--primary-color)',
                        paddingBottom: '5px'} : {})} 
                  to='/balance'>
                  BALANCE
                </NavLink>
              </li>
              <li>
                <NavLink  
                  style={({ isActive }) => 
                      (isActive ? {fontWeight: '700',
                        borderBottom: '5px solid var(--primary-color)',
                        paddingBottom: '5px'} : {})} 
                  to='/createtrx'>
                  NEW TRX
                </NavLink>
              </li>
              
            </ul>
              <button onClick={() => handleLogOut()}>Log out</button>
            </nav>
            
    </header>
    </>
  )  
} else {
  return (
    <header className={styles.titleOnly}> 
            
            <Link to='/' >
            <h1>CRYPTO DASHBOARD </h1>
            </Link>
             
    </header>
  )  
}

}
