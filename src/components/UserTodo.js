import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { connect } from 'react-redux'
import { addTodo } from '../redux/userTodos/userTodosAction'

function UserTodo(props) {
    const {data,addToDo,saveClicked}=props
    const id=useSelector(state=>state.userDetail.id)
      
    
   useEffect(()=>{
    data.length>0&&addToDo(id,data)
   },[saveClicked])
   

  return (
    <div></div>
  )
}
const mapStateToProps=(state)=>{
    return{
        todoData:state.usertodo.userData
    }
}

const mapStateToDispatch=(dispatch)=>{
    return{
        addToDo:(id,data)=>dispatch(addTodo(id,data))
    }
}
export default connect(mapStateToProps,mapStateToDispatch)(UserTodo)