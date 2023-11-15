import React from 'react'
import Search from './Search';
import EditTodo from './EditTodo';
import TodoItem from './TodoItem';
function Tasks(props) {
    const {onSearch,onEdit,onDelete,onComplete,onModify,data}=props
  return (
    <>
        {/* <h2 className="heading2">MY TASKS</h2> */}
        <Search onSearch={onSearch}/>
        <>
        <ul className="task-list">
        {data.length>0?
        data.map((item,index)=>{
          return(
            <li className="Tasks" key={index}>
               {item.isediting?
              <EditTodo item={item} onModify={onModify}/>
              :<TodoItem item={item} onEdit={onEdit} onDelete={onDelete} onComplete={onComplete}/>}
            </li> )})
        :""}
      </ul>
    </>
    </>
  )
}

export default Tasks