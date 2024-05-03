import { useSelector } from "react-redux"
import { changeCurrentTaskId,deleteSelectedTask} from "./reducer"
import { useDispatch } from "react-redux"

const Todo =(props)=>
{
    const taskList = useSelector((store)=>store.taskList)
    const {setCurrentTask,setIsEdit}=props;
    const dispatch= useDispatch();
    console.log(taskList);
    const onUpdateHandler = (e,data) =>
    {
        e.preventDefault();
        setCurrentTask(data.task);
        setIsEdit(true);
        dispatch(changeCurrentTaskId(data.id));

    }
    const onDeleteHandler =(e,data)=>
    {
        e.preventDefault();
        dispatch(deleteSelectedTask(data.id));
    }
    return (
        <div>
            <ul>
                {taskList.map((data)=>{return <div>
                    <li key={data.id}>{data.task}
                        <button onClick={(e)=>onUpdateHandler(e,data)}>Edit</button>
                        <button onClick={(e)=>onDeleteHandler(e,data)}>Delete</button>
                    </li>
                </div>})}
            </ul>
        </div>
    )
}
export default Todo