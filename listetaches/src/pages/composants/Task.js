import StatusTask from './StatusTask';
import Title from './Title';
import DateTask from './DateTask';
import DescripTask from './DescripTask';

const Task = ({ task }) => {
  return (
    <div
      className={`p-9 rounded-2xl border-4 ${
        task.statut ? 'border-green-700' : 'border-blue-500'
      } transition duration-300 hover:bg-slate-600`}
    >
      <Title title={task.titre} />
      <DescripTask description={task.description} />
      <DateTask date={task.date} />
      <StatusTask status={task.statut} />
      <br />
    </div>
  );
};
export default Task;
