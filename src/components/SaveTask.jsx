import React from 'react'

function SaveTask(props) {
    
    const {setSave,setSaveClicked}=props
    const handleSave=()=>{
      setSaveClicked(prev=>prev+1)
      setSave(true)
    }
  return (
    <div>
        <button className='btn Savebtn' onClick={handleSave}>Save</button>
    </div>
  )
}

export default SaveTask