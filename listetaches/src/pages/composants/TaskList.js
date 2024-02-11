import { useState } from "react";
import Task from "./Task";

const TaskList = ({ listeTaches }) => {
    const [tasks, setTasks] = useState(listeTaches);
    return (
        <div>
            <h2 className="text-4xl">A faire:</h2>
            <div className="grid grid-cols-4 gap-4">
                {tasks.map((task) => (
                    <Task task={task} key={task.id} />
                ))}
            </div>
        </div>
    );
};
export default TaskList;
