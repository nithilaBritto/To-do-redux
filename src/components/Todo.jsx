import React from 'react'
import AddTask from './AddTask';
import Header from './Header';
import Tasks from './Tasks';
import DropDown from './DropDown';
import NoData from './NoData';
import { useSelector,useDispatch } from 'react-redux';
import SaveTask from './SaveTask';
import UserTodo from './UserTodo';
import { deleteTodo, editTodo, modifyTodo, updateTodo } from '../redux/userTodos/userTodosAction';


function Todo() {
    const userData=useSelector(state=>state.usertodo.userData)
    const userid=useSelector(state=>state.userDetail.id)
    const [task,setTask]=React.useState()
    const [data,setData]=React.useState([])
    const [count,setCount]=React.useState(1)
    const [searchQuery,setSearchQuery]=React.useState('')
    const [filteredData,setFilteredData]=React.useState([])
    const [showToDo,setShowToDo]=React.useState(false)
    const [save,setSave]=React.useState(false)
    const [saveClicked,setSaveClicked]=React.useState(0)
   const dis=useDispatch()

   React.useEffect(()=>{
    const filteredData=(data.filter(item=>searchQuery?item.task.toLowerCase().includes(searchQuery):true))
    setFilteredData(filteredData)
  },[searchQuery,data]) 

   React.useEffect(()=>{
    const currUserData=Object.keys(userData[userid]??{}).length>0?userData[userid]:[]
    setData(currUserData)
   },[userid,userData])
   
    const errorCode=useSelector(state=>state.userReducer.error)
    const isError=(errorCode===404)
    const onSearch=(e)=>{
      setSearchQuery(e.toLowerCase())
    }

    const handleEdit=(id)=>{
      const editTask=filteredData.filter(item=>item.id===id)
      dis(editTodo(userid,editTask[0]))
    }
    
    const handleDelete=(id)=>{
      const deleteTask=filteredData.filter(item=>item.id===id)
      dis(deleteTodo(userid,deleteTask[0]))
    
        //On clicking delete task is removed
        //When save not clicked
        const newData=data.filter(ele=>ele.id!==id)
        setData(newData)
    }

    const taskComplete=(id)=>{
            
      const val=isSaved()
      if(val){
        const updateTask=filteredData.filter(item=>item.id===id)
      dis(updateTodo(userid,updateTask[0]))
      }
      
  }

  const onAdd=(task)=>{
      setCount(prev=>prev+1)
    task&&setData(prev=>(
    [...prev,{id:count,task:task,completed:false,isediting:false}]))
  }

  const onModify=(id,value)=>{    
    const modifyTask=filteredData.filter(item=>item.id===id)
      dis(modifyTodo(userid,modifyTask[0],value))
  }

  const isSaved=()=>{
    const currUserData=Object.keys(userData[userid]??{}).length>0?userData[userid]:[]
      if(data.length!==currUserData.length){
          alert("Please save before editing")
          return false
      }
      return true
  }
  return (
    <>
      {isError?<h1>404 Error found</h1>:
      <>
      <Header />
      <DropDown setShowToDo={setShowToDo}/>
      </>
      }
      {showToDo ?
      <>
      <AddTask onAdd={onAdd} setTask={setTask} data={data}/>
      <Tasks data={filteredData} onSearch={onSearch} onEdit={handleEdit} onDelete={handleDelete} onModify={onModify} onComplete={taskComplete}/>
      {filteredData.length>0&&<SaveTask setSave={setSave} setSaveClicked={setSaveClicked}/>}
      {save&&<UserTodo data={filteredData}  saveClicked={saveClicked}/>}
      </>:<NoData isError={isError}/>}
    </>
  )
}


export default Todo