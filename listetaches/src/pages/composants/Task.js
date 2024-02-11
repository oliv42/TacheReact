const Task = ({ task }) => {
    return (
        <div>
            <div>Titre : {task.titre}</div>
            <div>Description : {task.description}</div>
            <div>Date: </div>
            <div>Statut: {task.statut ? "Fait" : "A faire"}</div>
            <br />
        </div>
    );
};
export default Task;
