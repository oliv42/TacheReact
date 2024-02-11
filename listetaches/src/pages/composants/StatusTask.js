const StatusTask = ({ status }) => {
    return (
        <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
            <input
                checked={status}
                id="bordered-checkbox-1"
                type="checkbox"
                name="bordered-checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
                for="bordered-checkbox-1"
                class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
                Fait
            </label>
        </div>
    );
};

export default StatusTask;
