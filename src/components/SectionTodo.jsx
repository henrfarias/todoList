import React from 'react';
import styled from 'styled-components';

const SectionTodoStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: clamp(280px, 100vw, 800px);
`;

const SectionTodo = ({ children }) => {
  return (
    <SectionTodoStyled>
      { children }
    </SectionTodoStyled>
  );
}

export default SectionTodo;