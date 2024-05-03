const intialValue = {taskList:[],currentTaskId:''}

export default function reducer(state = intialValue,action) {
    console.log(action);
    switch(action.type) {
        case "Add":
            return {...state,taskList:[...state.taskList,action.payload]};
        case "changeCurrentTaskId":
            return {...state,currentTaskId:action.payload}
        case "onEditHandler":
            const someData= state.taskList.filter((arr)=>arr.id!==action.payload.id)
            const editedData={id:action.payload.id,task:action.payload.task}
            return {
                ...state,taskList:[...someData,editedData]
            }
        case "deleteSelectedTask":
            const remainingData = state.taskList.filter((arr)=>arr.id!==action.payload);
            console.log(remainingData)
            return {
                ...state,taskList:[...remainingData]
            }
        default:
            return state
    }

}
export function add(task) {
    return {type:"Add", payload:task}
}
export function changeCurrentTaskId(taskId) {
    return {type:"changeCurrentTaskId", payload:taskId}
}
export function onEditHandler(obj) {
    return {type:"onEditHandler" , payload:{id:obj.id,task:obj.task}};
}
export function deleteSelectedTask(id) {
    return {type:"deleteSelectedTask", payload:id}
}