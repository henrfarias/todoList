import React, { createContext, useState } from "react";

const TodoListContext = createContext({});

const TodoProvider = ({ children }) => {
  
  const [newTask, setNewTask] = useState(''); 
  const [tasks, setTasks] = useState([])
  const [taskDone, setTaskDone] = useState(false);

  function tasksUpdate(index) {
    if(!tasks[index].done) {
      tasks[index].done = true;
      setTasks([...tasks]);
    } else {
      tasks[index].done = false;
      setTasks([...tasks]);
    }
  }

  function deleteAllDoneTasks() {
    const remainingTasks= []
    tasks.map((task) => {
      if(!task.done) {
        remainingTasks.push(task);
      }
      return [...remainingTasks];
    })
    setTasks([...remainingTasks]);
  }

  function deleteTask(index) {
    tasks.splice(index, 1);
    setTasks([...tasks]);
  }

  // useEffect(() => {
  //   console.log(tasks);
  // }, [tasks]);

  return (
    <TodoListContext.Provider value={{
      newTask,
      tasks,
      taskDone,
      setNewTask,
      setTasks,
      setTaskDone,
      tasksUpdate,
      deleteAllDoneTasks,
      deleteTask
    }}>
      {children}
    </TodoListContext.Provider>
  );
};

export { TodoListContext, TodoProvider };
