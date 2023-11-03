import React from 'react'

function EditTodo(props) {
    const {onModify}=props
    const {id,task}=props.item
    const editRef=React.useRef(null)
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        const currentval=editRef.current.value
        onModify(id,currentval)
        
    }

    React.useEffect(()=>{
      editRef.current.value=task
    },[])
    
  return (
    <div>
        <form>
            <input type='text'  className='updateTask' ref={editRef}/>
            <button className='AddTask' onClick={(e)=>handleSubmit(e)}>Update</button>
        </form>
    </div>
  )
}

export default EditTodo