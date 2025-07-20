import { useEffect, useState } from "react";

export default function AddModal({ hide, saveTasks }) {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([""]);

  // Add new task to the list
  const addTask = () => {
    setTasks([...tasks, ""]);
  };

  // Remove task from the list
  const removeTasks = (index) => {
    if (tasks.length > 1) {
      setTasks(tasks.filter((_, i) => i !== index));
    }
  };

  useEffect(() => {
    // Ensure there is at least one task in the list by default
    if (tasks.length === 0) {
      setTasks([""]);
    }
  }, [tasks]);

  // Handle saving tasks to the parent
  const handleSave = () => {
    const nonEmptyTasks = tasks.filter((task) => task.trim() !== "");
    saveTasks(nonEmptyTasks);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 bg-opacity-50">
      <div
        className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-2xl transition-all duration-300 border-t-4 border-indigo-600"
        style={{
          backgroundImage: "url('https://www.w3schools.com/w3images/flowers.jpg')", // Flower image background
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(255, 255, 255, 0.8)", // Light overlay to make the text readable
        }}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-800">About Your Tool!</h3>
          <button onClick={hide} className="text-gray-600 hover:text-gray-800 focus:outline-none">
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <div className="space-y-4">
          {/* Title Section */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Task Title</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              value={title}
              className="mt-2 p-3 border-2 border-indigo-400 rounded-md w-full text-gray-800 focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter task title"
            />
          </div>

          {/* Task List Section */}
          <div>
            <label htmlFor="list" className="block text-sm font-medium text-gray-700">Task List</label>
            <div className="space-y-2 mt-2">
              {tasks.map((_, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <input
                    type="text"
                    className="p-3 border-2 border-teal-400 rounded-md w-full text-gray-800 focus:ring-2 focus:ring-teal-500"
                    placeholder={`Task ${index + 1}`}
                    onChange={(e) => {
                      const newTasks = [...tasks];
                      newTasks[index] = e.target.value;
                      setTasks(newTasks);
                    }}
                  />
                  {tasks.length > 1 && (
                    <button
                      onClick={() => removeTasks(index)}
                      className="px-3 py-2 text-xs bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none">
                      DELETE
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Add Task Button */}
          <button
            onClick={addTask}
            className="px-4 py-2 w-full bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white rounded-md hover:bg-gradient-to-l focus:outline-none transition-colors">
            + Add Task
          </button>

          {/* Save Button */}
          <button
            onClick={handleSave}
            className="mt-4 px-4 py-2 w-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-white rounded-md hover:bg-gradient-to-l focus:outline-none transition-colors">
            Save Tasks
          </button>
        </div>
      </div>
    </div>
  );
}
