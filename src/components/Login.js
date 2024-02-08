import React from 'react'

const Login = () => {
    return (
        <div>
        
        <div  className='login-form' >
        <form action=''>
        <h3>login</h3>
        <input type='text'  className='boxi' placeholder='entre your name'  ></input>
        <input type='text'  className='boxi' placeholder=' entre your email'  ></input>
        <input type='password'  className='boxi' placeholder='password'  ></input>
        <input type='submit'  id='btnsubmit' className='boxi' value='login now' ></input>
        </form>
        </div>
      </div>
        

    )
}

export default Login
