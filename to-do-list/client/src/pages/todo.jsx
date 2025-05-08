import { useEffect, useState } from "react";
import axios from "axios";
import AddModal from "../components/AddModal"; // Ensure this path is correct

function Todo() {
  const [titles, setTitles] = useState([]);
  const [showModal, setShowModal] = useState(false); // Modal should initially be false
  const [tasks, setTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
  const [task, setTask] = useState(""); // State to handle new task input

  // Fetch titles from the API
  useEffect(() => {
    const getTitles = async () => {
      try {
        const response = await axios.get('http://localhost:3000/get-titles');
        setTitles(response.data.titles);
      } catch (error) {
        console.error("Error fetching titles:", error);
      }
    };
    getTitles();
  }, []);

  // Load tasks from local storage when the component is mounted
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const savedDoneTasks = JSON.parse(localStorage.getItem("doneTasks")) || [];
    
    setTasks(savedTasks);
    setDoneTasks(savedDoneTasks);
  }, []);

  // Save tasks to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("doneTasks", JSON.stringify(doneTasks));
  }, [tasks, doneTasks]);

  const addTask = async () => {
    if (task) {
      const newTasks = [...tasks, task];
      setTasks(newTasks);
      setTask(""); // Clear the input field
      setShowModal(true); // Show the modal after adding task
  
      // Send tasks to the back-end API for saving to the database
      const taskData = {
        username: 'user1',  // Replace with the logged-in user's username
        title: 'New Task Title', // Replace with the title you want to assign
        taskList: newTasks,
      };
  
      try {
        await axios.post('http://localhost:3000/add-task', taskData);
        console.log("Tasks saved successfully");
      } catch (error) {
        console.error("Error saving tasks:", error);
      }
    }
  };
  
  

  // Handle marking a task as done
  const markAsDone = (index) => {
    const completedTask = tasks[index];
    setDoneTasks([...doneTasks, completedTask]);
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Handle saving tasks from AddModal
  const saveTasksFromModal = (newTasks) => {
    setTasks([...tasks, ...newTasks]); // Add new tasks to the ongoing tasks list
    setShowModal(false); // Close the modal after saving tasks
  };

  // Remove task from Done Tasks
  const removeTaskFromDone = (index) => {
    const updatedDoneTasks = doneTasks.filter((_, i) => i !== index);
    setDoneTasks(updatedDoneTasks);
  };

  return (
    <div className="relative min-h-screen flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600">
      <div className="container p-8 w-full max-w-6xl bg-white rounded-2xl shadow-2xl transform transition-transform duration-500 hover:scale-105">
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-10">To Do List</h2>

        {/* Main Flex Container for To Do and Done Tasks */}
        <div className="todo-container flex gap-8">
          
          {/* Ongoing Tasks Section with Flower Background */}
          <div className="todo flex-1 p-8 rounded-xl shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-105 relative"
            style={{
              backgroundImage: "url('https://www.w3schools.com/w3images/flowers.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "overlay",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            }}
          >
            <h3 className="text-4xl font-medium text-gray-800 mb-6">To Do</h3>
            <div className="tasks-list mb-6">
              {tasks.length === 0 ? (
                <p className="text-gray-600 italic">No ongoing tasks</p>
              ) : (
                tasks.map((t, index) => (
                  <button
                    key={index}
                    onClick={() => markAsDone(index)}
                    className="task-btn w-full py-4 px-5 mb-4 text-left bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 focus:outline-none"
                  >
                    {t}
                  </button>
                ))
              )}
            </div>

            {/* Input Section */}
            <div className="input-container flex gap-4 mt-6">
              <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter a new task..."
                className="task-input w-full py-4 px-5 text-gray-700 bg-gray-100 border-2 border-transparent rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-md transform transition-transform duration-300 hover:scale-105"
              />
              <button
                onClick={addTask}
                className="add-btn px-6 py-4 bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 text-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
              >
                Add Task
              </button>
            </div>
          </div>

          {/* Done Tasks Section with Flower Background */}
          <div className="done flex-1 p-8 rounded-xl shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-105 relative"
            style={{
              backgroundImage: "url('https://www.w3schools.com/w3images/flowers.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "overlay",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            }}
          >
            <h3 className="text-4xl font-medium text-gray-800 mb-6">Done Tasks</h3>
            <div className="done-list">
              {doneTasks.length === 0 ? (
                <p className="text-gray-600 italic">No tasks done yet</p>
              ) : (
                doneTasks.map((t, index) => (
                  <div
                    key={index}
                    className="done-task py-4 px-5 mb-4 text-left text-white rounded-lg shadow-md transform transition-all duration-300 hover:scale-105"
                  >
                    <span className="bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 py-2 px-4 rounded-lg">
                      {t}
                    </span>
                    <button
                      onClick={() => removeTaskFromDone(index)}
                      className="delete-btn ml-4 px-4 py-2 text-sm bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none">
                      Delete
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Modal for Add Task Confirmation */}
        {showModal && <AddModal hide={() => setShowModal(false)} saveTasks={saveTasksFromModal} />}
      </div>
    </div>
  );
}

export default Todo;


