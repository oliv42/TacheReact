import DeleteTask from './DelecteTask';

const StatusTask = ({ status, handleChangeStatut }) => {
  return (
    <div
      className="flex items-center border border-gray-200 rounded ps-4 dark:border-gray-700"
      onClick={handleChangeStatut}
    >
      <input
        checked={status}
        readOnly
        id="bordered-checkbox-1"
        type="checkbox"
        name="bordered-checkbox"
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor="bordered-checkbox-1"
        className="w-full py-4 text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
      >
        Fait
      </label>
      {status ? <DeleteTask /> : null}
    </div>
  );
};

export default StatusTask;
