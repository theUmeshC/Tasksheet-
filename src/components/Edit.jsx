import { useState } from "react";
import { Link, useParams ,useHistory} from "react-router-dom";
import useFetch from "./useFetch";

const Edit = () => {

    let history = useHistory();

    const {id} = useParams();

    let { data : task } = useFetch("http://localhost:4000/tasks/" + id);

    const [userName, setuserName] = useState("");
    

    const handleEdit = (e)=>{
        e.preventDefault();

        let currentDate = new Date();
        let startDate = new Date();
        let endDate = new Date();
        let status = "";

        if(currentDate < startDate)
        {
            status = "Pending";
        }
        else if(currentDate>=startDate && currentDate<=endDate)
        {
            status = "Ongoing"
        }
        else
        {
            status = "Completed";
        }

        let newTask = {userName : userName }

        fetch("http://localhost:4000/tasks/"+id , 
        {
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(newTask)
        }
        ).then(()=>{
            alert("task edited successfully");
            history.push("/tasklist");
    })
    }


    return ( 
    <div className="edit-task">

        <h1>Edit a Task</h1>

        {task && <div>
            <form onSubmit={handleEdit}>

            <label>User Name</label> <input type="text" defaultValue={task.userName} onChange={(e)=>{setuserName(e.target.value)}} />

            <label>Task Name</label> <input type="text" defaultValue={task.taskName} />

            <label>Task Detail</label> <textarea defaultValue={task.taskDetail}/>

            <label>Start Date</label> <input type="date" defaultValue={task.startDate}/>

            <label>End Date</label> <input type="date" defaultValue={task.endDate } />

            <input type="submit" value="Edit Task" />

            </form>

        <Link to="/tasklist">
            <button className="btn">Click to view all task list</button>
        </Link>
        </div>}
        
    </div> 
    );
}
export default Edit;