import React from 'react'

function AddTask(props) {
  const inputRef=React.useRef(null)
    const {onAdd}=props
    
    const handleClick=(e)=>{
      e.preventDefault();
      const currentVal=inputRef.current.value
      inputRef.current.value=""
      
      onAdd(currentVal)
    }
  return (
    <div>
         <form className="add-task">
        <input 
        id="taskinput"
        type="text" 
        placeholder="Add new task"
        ref={inputRef}/>
        <button className='btn' onClick={handleClick}>
          Add 
        </button>
      </form>
    </div>
  )
}

export default AddTask