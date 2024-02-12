import StatusTask from './StatusTask';
import Title from './Title';
import DateTask from './DateTask';
import DescripTask from './DescripTask';
import { useState } from 'react';
import listeTaches from '../../../../tache.js';

const Task = () => {
  const [tasks, setTasks] = useState(listeTaches);

  //todo: changer le statut de la tâche
  const handleChangeStatut = (index) => {
    setTasks((prevState) => {
      const listTaskStatusChanged = prevState.map((task, i) => {
        if (i === index) {
          return { ...task, statut: !task.statut };
        }
        return { ...task };
      });
      console.log(listTaskStatusChanged);
      return listTaskStatusChanged;
    });
  };

  if (Array.isArray(tasks) && tasks.length !== 0) {
    return (
      <>
        {tasks.map((task, index) => (
          <div
            className={`p-9 rounded-2xl border-4 ${
              task.statut ? 'border-green-700' : 'border-blue-500'
            } transition duration-300 hover:bg-slate-600`}
            key={index}
          >
            <Title title={task.titre} />
            <DescripTask description={task.description} />
            <DateTask date={task.date} />
            <StatusTask
              index={index}
              status={task.statut}
              handleChangeStatut={() => handleChangeStatut(index)}
            />
            <br />
          </div>
        ))}
      </>
    );
  } else {
    return <div>Il n'y a pas de tâches à afficher</div>;
  }
};
export default Task;
