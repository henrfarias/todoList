import React, { createContext, useState } from "react";
import { ITasks } from '../../Interfaces/index';

interface TodoList {
  newTask: string;
  setNewTask?: React.Dispatch<string>
  tasks: ITasks[];
  setTasks?: React.Dispatch<ITasks[]>
  tasksUpdate: Function;
  deleteAllDoneTasks: Function;
  deleteTask: Function;

}

const TodoListContext = createContext<TodoList>({
  newTask: '',
  tasks: [],
  deleteAllDoneTasks: () => {},
  tasksUpdate: () => {},
  deleteTask: () => {},
});

const TodoProvider: React.FC = ({ children }) => {
  
  const [newTask, setNewTask] = useState(''); 
  const [tasks, setTasks] = useState<ITasks[]>([]);

  function tasksUpdate(index:number) {
    if(!tasks[index].done) {
      tasks[index].done = true;
      setTasks([...tasks]);
    } else {
      tasks[index].done = false;
      setTasks([...tasks]);
    }
  }

  function deleteAllDoneTasks() {
    const remainingTasks: ITasks[] = []
    tasks.map((task) => {
      if(!task.done) {
        remainingTasks.push(task);
      }
      return [...remainingTasks];
    })
    setTasks([...remainingTasks]);
  }

  function deleteTask(index: number) {
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
      setNewTask,
      setTasks,
      tasksUpdate,
      deleteAllDoneTasks,
      deleteTask
    }}>
      {children}
    </TodoListContext.Provider>
  );
};

export { TodoListContext, TodoProvider };
