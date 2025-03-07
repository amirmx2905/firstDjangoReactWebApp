import React from 'react'
import Form from '../components/Form'

function Register() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <Form route="api/user/register/" method="register"/>
    </div>
    
  )
  
}

export default Register