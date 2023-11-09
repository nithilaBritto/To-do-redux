import React from 'react'
import useFetch from './useFetch'
function Header(props) {
  return (
    <>
      {props.pending?<h1>Loading...</h1>:
      <>
      <span className='user'>Hi {props.user}</span>
        <h1>TO-DO-LIST</h1>
      </>}
    </>
  )
}

export default Header