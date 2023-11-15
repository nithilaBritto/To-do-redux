import React from 'react'
// import useFetch from './useFetch'
import { useSelector } from 'react-redux'
function Header(props) {
  const selectedName=useSelector(state=>state.userDetail.name)
  
  return (
    <>
      {props.pending?<h1>Loading...</h1>:
      <>
      <span className='user'>{selectedName&&`Hi ${selectedName}`}</span>
        <h1>TO-DO-LIST</h1>
      </>}
    </>
  )
}

export default Header