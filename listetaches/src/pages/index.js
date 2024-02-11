import listeTaches from "../../../tache.js";
import TaskList from "./composants/TaskList.js";
export default function App() {
    return (
        <>
            <h1>Liste de Taches</h1>
            <TaskList listeTaches={listeTaches} />
        </>
    );
}
