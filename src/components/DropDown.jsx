import React from 'react'
import { connect } from 'react-redux';
import { fetchUser } from '../redux/user/userAction';
import { currentUserDetail } from '../redux/singleUser/singleAction';
function DropDown(props) {
    const {setShowToDo,fetchUser,currentUserDetail}=props
    
    React.useEffect(()=>{
        fetchUser()
      },[])

    const userJson=props.id.length>0&&props.id.map((item,index)=>({[item]:props.users[index]}))
    
    const handleChange=(e)=>{
        const selectedValue=e.target.value
        const [id,name]=selectedValue.split(':')
        currentUserDetail(id,name)
        setShowToDo(true)
    }
  return (
    <>
        <div className="select">
        <select name="slct" id="slct" onChange={(e)=>handleChange(e)}>
        <option className='default'>Choose user name</option>
           {userJson.length>0&&userJson.map((item)=>
           {
            return(
                <option key={Object.keys(item)} value={`${Object.keys(item)}:${Object.values(item)}`} >{Object.values(item)}</option>
            )
           }
           )} 
           </select>
        </div>
    </>
  )
}
const mapStateToProps=state=>{
    
  return{
    users:state.userReducer.users,
    id:state.userReducer.id,
    
    error:state.userReducer.error
  }
}

const mapStateToDispatch=dispatch=>{
  return{
    fetchUser:()=>dispatch(fetchUser()),
    currentUserDetail:(id,name)=>dispatch(currentUserDetail(id,name))
  }
}
export default  connect(mapStateToProps,mapStateToDispatch)(DropDown)