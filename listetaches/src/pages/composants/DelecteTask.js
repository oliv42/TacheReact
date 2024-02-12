const DeleteTask = ({ id, handleDelete }) => {
  return (
    <button
      onClick={handleDelete}
      className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
    >
      Supprimer
    </button>
  );
};

export default DeleteTask;
