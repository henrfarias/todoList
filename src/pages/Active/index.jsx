import React, { useContext } from 'react';
import Header from '../../components/Header';
import SectionTodo from '../../components/SectionTodo';
import MenuBar from '../../components/MenuBar';
import InputDiv from '../../components/InputDiv';
import TodoList from '../../components/TodoList';
import ListItem from '../../components/ListItem';
import { TodoListContext } from '../../context/TodoList';

const Active = () => {

  const { tasks, tasksUpdate } = useContext(TodoListContext);

  return(
    <>
    <Header />
    <SectionTodo>
      <MenuBar index="2" />
      <InputDiv />
        <TodoList>
          {
            tasks.map((task, index) => {
                if(!task.done){
                  return <ListItem key={index} label={task.task} id={index} onChange={() => tasksUpdate(index)}/>
                }
              
              return null;
            })
          }
          
        </TodoList>
    </SectionTodo>
  </>
  );
}

export default Active;