import StatusTask from './StatusTask';
import Title from './Title';
import DateTask from './DateTask';
import DescripTask from './DescripTask';
import { useState } from 'react';
import listeTaches from '../../../../tache.js';

const Task = () => {
  const [tasks, setTasks] = useState(listeTaches);

  const handleChangeStatut = (index) => {
    setTasks((prevState) => {
      console.log(prevState[index]);
      return prevState;
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
