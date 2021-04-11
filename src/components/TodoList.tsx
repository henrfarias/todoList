import React from 'react';
import styled from 'styled-components';

const TodoListStyled = styled.ul`
  display: flex;
  flex-direction: column;

  margin-top: 3.2rem;
  width: 100%;

`;

const TodoList: React.FC = ({ children }) => {
  return (
    <TodoListStyled>
        {children}
    </TodoListStyled>
  );
}

export default TodoList;