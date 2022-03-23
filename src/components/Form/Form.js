import * as React from 'react';
import styles from './Form.module.css';

export default function Form({ title, setPassword, setEmail, handleAction }) {
    return (
        <div className={styles.formContainer}>
            <h2>
                {title} 
            </h2>
            <form>
                <label>
                    Email:
                    <input type="email" required placeholder="hello@gmail.com" onChange={(e) => setEmail(e.target.value)} />
                </label>
                {
                    title !== 'Reset password'
                    ?
                        <label>
                            Password:
                            <input type="password" autoComplete="on" placeholder="password" required onChange={(e) => setPassword(e.target.value)} />
                        </label>
                    : null 
                }
                <input  type="button" onClick={handleAction} value="Submit"/> 
            </form>    
               
        </div>
    );
}
