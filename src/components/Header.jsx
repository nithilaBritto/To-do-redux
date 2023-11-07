import React from 'react'
import useFetch from './useFetch'
function Header() {
  const [user]=useFetch("https://jsonplaceholder.org/users")
  return (
    <>
      <span className='user'>Hi {user}</span>
        <h1>TO-DO-LIST</h1>
    </>
  )
}

export default Header