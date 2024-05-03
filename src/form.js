import { useDispatch,  useSelector  } from "react-redux";
import {onEditHandler } from "./reducer"


import { add } from "./reducer";
const Form = (props) =>{
    const {currentTask,setCurrentTask,isEdit,setIsEdit}=props
    const temp = useSelector((store)=>store.taskList)
    console.log(temp);
    const currentTaskId = useSelector((store)=>store.currentTaskId)
    
    const dispatch = useDispatch()
    
    const onAddTask=(e) =>
    {
        e.preventDefault();
        const addingTask ={id:temp.length+1,task:currentTask}
        console.log(addingTask);
        dispatch(add(addingTask));
        setCurrentTask('');
    }
    const onEditTask=(e)=>
    {
        e.preventDefault();
        dispatch(onEditHandler({id:currentTaskId,task:currentTask}));
        setIsEdit(false);
        setCurrentTask('');
    }
    return (
        <div>
            <form>
                <label>Tasks:</label>
                <input type="text"  value={currentTask} onChange={(e)=>setCurrentTask(e.target.value)}></input>
                {!isEdit ? <button onClick={(e)=>onAddTask(e)}>Add</button>: <button onClick={(e)=>onEditTask(e)}>Edit</button>}
                
            </form>
        </div>
    )

}
export default Form;