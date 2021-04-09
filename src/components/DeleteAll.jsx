import React, { useContext } from 'react';
import styled from 'styled-components';
import { TodoListContext } from '../context/TodoList';

const DeleteAllStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;

  width: 12.4rem;
  height: 4.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  background: #EB5757;
  color: #FFF;
  font-weight: 600;
  font-size: 1.2rem;

  svg {
    padding-right: 0.55rem;
    width: 2rem;
    fill: #FFF;
  }
`;

const DeleteAll = ({children, onClick}) => {

  const { deleteAllDoneTasks } = useContext(TodoListContext);


  return (
    <DeleteAllStyled onClick={() => deleteAllDoneTasks()}>
      {children}
    </DeleteAllStyled>
  )
}

export default DeleteAll;