import React, { useContext } from 'react';
import styled from 'styled-components';
import { TodoListContext } from '../context/TodoList';

const InputDivStyled = styled.div`
  
  display: flex;
  width: 100%;
  margin-top: 1.8rem;

  input {

    flex: 1;
    height: 5.6rem;
    border-radius: 12px;
    border: 1px solid #BDBDBD;
    font-size: 1.4rem;
    padding-left: 1.2rem;
    outline: none;
    transition: all 150ms;

    :focus {
      border-color: #2F80ED; 
      box-shadow: inset 0 0 5px rgba(47, 128, 237, 0.8);
    }
  }

  button {
    width: 10.9rem;
    margin-left: 2.5rem;

    border-radius: 12px;
    border: none;
    
    font-size: 1.4rem;
    font-weight: 600;
    color: #FFF;
    background-color: #2F80ED;
    outline: none;
    cursor: pointer;
    transition: all 200ms; 
    box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.4);

    :hover {
      background-color: #02C39A;
      box-shadow: none;
    }
  }
`;

const InputDiv = () => {
  
  const { newTask, setNewTask, tasks, setTasks } = useContext(TodoListContext);

  const onChange = (event) => {
    setNewTask(event.target.value);
  }

  const onClick = () => {
    if (newTask === ''){
      return;
    }
    setTasks([...tasks, {task: newTask, done: false}]);
  }
  
  return (
    <InputDivStyled>
      <input placeholder='add details' onChange={ onChange } />
      <button onClick={ onClick }>Add</button>
    </InputDivStyled>

  );
}

export default InputDiv;