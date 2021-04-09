import React, { useContext } from 'react';
import Header from '../../components/Header';
import SectionTodo from '../../components/SectionTodo';
import MenuBar from '../../components/MenuBar';
import TodoList from '../../components/TodoList';
import ListItem from '../../components/ListItem';
import { TodoListContext } from '../../context/TodoList';
import DeleteAll from '../../components/DeleteAll';

const Done = () => {
  
  const { tasks, tasksUpdate, deleteTask } = useContext(TodoListContext);

  return(
    <>
    <Header />
    <SectionTodo>
      <MenuBar index="3" />
      <TodoList>
        {
          tasks.map((task, index) => {
            if (task.done){
              return (
                <ListItem key={index} label={task.task} id={index} onChange={() => tasksUpdate(index)} checked>
                  <button type='button' onClick={() => deleteTask(index)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
                      <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/>
                    </svg>
                  </button>
                </ListItem>
              );
            }
            return null;
          })
        }
        <DeleteAll>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
            <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/>
          </svg>
          delete all
        </DeleteAll>
      </TodoList>
    </SectionTodo>
  </>
  );
}
export default Done;