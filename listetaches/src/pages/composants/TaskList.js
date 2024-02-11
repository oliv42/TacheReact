import { useState } from "react";
import Task from "./Task";

const TaskList = ({ listeTaches }) => {
    const [tasks, setTasks] = useState(listeTaches);
    return (
        <div>
            <h2 className="m-5 text-4xl text-center underline">A faire :</h2>
            <div className="grid grid-cols-4 gap-4">
                {tasks.map((task) => (
                    <Task task={task} key={task.id} />
                ))}
            </div>
        </div>
    );
};
export default TaskList;
