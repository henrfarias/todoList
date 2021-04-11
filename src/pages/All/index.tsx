import React, { useContext } from 'react';
import Header from '../../components/Header';
import SectionTodo from '../../components/SectionTodo';
import MenuBar from '../../components/MenuBar';
import InputDiv from '../../components/InputDiv';
import TodoList from '../../components/TodoList';
import ListItem from '../../components/ListItem';
import { TodoListContext } from '../../context/TodoList';

const Home = () => {

  const { tasks, tasksUpdate } = useContext(TodoListContext);

    return (
      <>
        <Header />
        <SectionTodo>
          <MenuBar index="1" />
          <InputDiv />
          <TodoList>
            {
              tasks.map((task, index) => {
                if(task.done) {
                return <ListItem key={index} label={task.task} id={index} onChange={() => tasksUpdate(index)} checked/>
                }
                return <ListItem key={index} label={task.task} id={index} onChange={() => tasksUpdate(index)}/>
              })
            }
          </TodoList>
        </SectionTodo>
      </>
  );
}

export default Home;