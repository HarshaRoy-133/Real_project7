import React from 'react'
import './App.css'

export default function App() {
  const IMGURL = import.meta.env.BASE_URL;
  const [isLoginView, setIsLoginView] = React.useState(true)

  function switchView() {
    setIsLoginView(isLoginView === true?false:true);
  }

  return (
    <div className='app'>
      {isLoginView && (
        <div className='login-container'>
          <h2>Sign in with email</h2>
          <div className='input-group'>
            <img className='left-icon' src={IMGURL + "mail.png"}alt=''/>
            <input type='text' placeholder='Enter a emailID'/>
            
            </div>
            <div className='input-group'>
              <input type='{tooglePassword}' placeholder='Enter a valid password'/>
              </div>
          <p>
            Don't have an account?{' '}
            <label onClick={switchView}>Sign up</label>
          </p>
        </div>
      )}

      {!isLoginView && (
        <div className='login-container'>
          <h2>Register for a new account</h2>
          <p>
            If you already have an account{' '}
            <label onClick={switchView}>Sign in</label>
          </p>
        </div>
      )}
    </div>
  )
}