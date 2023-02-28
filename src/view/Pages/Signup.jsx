import React from 'react'

const Signup = () => {
  return (
    <div className='register'>
      <input autoComplete='off' type='text' placeholder='enter Your Name' />
      <input autoComplete='off' type='text' placeholder='enter Email address...' />
      <input autoComplete='off' type='text' placeholder='enter Password' />
      <input autoComplete='off' type='text' placeholder='enter confirm password' />
      <button type='submit'>Register</button>
    </div>
  )
}

export default Signup