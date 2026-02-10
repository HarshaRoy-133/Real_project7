import React from 'react'
import './App.css'

export default function App() {
  const IMGURL = import.meta.env.BASE_URL;
  const [isLoginView, setIsLoginView] = React.useState(true);

  function switchView() {
    setIsLoginView(isLoginView===true?false:true);
  }

  return (
    <div className='app'>
      {isLoginView && (
        <div className='login-container'>
          <h2>Sign in with email </h2>
          <div className='input-group'>
            <img className='left-icon'src={IMGURL+'mail.png'}alt='Email Icon'></img>
            <input type='text' placeholder=' Enter a Email' />
            </div>
            <div className='input-group'>
              <img className='left-icon'src={IMGURL+'lock.png'}alt='lock Icon'></img>
            <input type='password' placeholder=' Enter a Password' />
            </div>
          <p>
            Don't have an account?{' '}
            <label onClick={switchView}>Sign up  </label>
            <button type='button'>Sign in</button>
          </p>
          <footer> M. Sree Harsha -- 2500031858---</footer>
        </div>
      )}

      {!isLoginView && (
        <div className='login-container'>
          <h2>Register for a account </h2>
          <div className='input-group'>
            <img className='left-icon'src={IMGURL+'pro.png'}alt='pro Icon'></img>
            <input type='text' placeholder=' Enter a Full Name' />
            </div>
            <div className='input-group'>
            <img className='left-icon'src={IMGURL+'pro.png'}alt='pro Icon'></img>
            <input type='text' placeholder=' Enter a Last Name' />
            </div>
            <div className='input-group'>
              <img className='left-icon'src={IMGURL+'phone.png'}alt='phone Icon'></img>
            <input type='tel' placeholder=' Enter a Phone Number' />
            </div>
             <div className='input-group'>
              <img className='left-icon'src={IMGURL+'lock.png'}alt='lock Icon'></img>
            <input type='password' placeholder=' Enter a Password' />
            </div>

          <button type='button'>Sign up</button>
          <p>
            If you already have an account{' '}
            <label onClick={switchView}>Sign in </label>
          </p>
          <footer> M. Sree Harsha -- 2500031858---</footer>
        </div>
      )}
    </div>
  )
}