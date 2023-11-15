import React from 'react'

function NoData(props) {
  return (
   <>
   {
    props.isError?"":
    <>
     <div className='NoData'>
        <h3>No Data Available</h3>
        <h3>Please select users from Drop down list</h3>
    </div>
    </>
   }
   </>
  )
}

export default NoData