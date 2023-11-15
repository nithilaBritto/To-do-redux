import React from 'react'
import { useSelector } from 'react-redux'
import { connect } from 'react-redux'
import { addTodo } from '../redux/userTodos/userTodosAction'
function UserData(props) {
    const {data,addToDo,todoData,setData}=props
    const selectedName=useSelector(state=>state.userName.name)
    // console.log('selectedData',todoData[selectedName]) 
    console.log(todoData)
    // console.log('data',data)  
    const handleClick=()=>{
        data.length>0&&addToDo(selectedName,data)
        setData(todoData[selectedName])
    }
  return (
    <div>
        <button onClick={handleClick}>Save</button>
    </div>
  )
}
const mapStateToProps=(state)=>{
    return{
        todoData:state.usertodo.userData
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        addToDo:(selectedName,data)=>dispatch(addTodo(selectedName,data))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserData)