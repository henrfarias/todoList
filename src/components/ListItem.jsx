import React from 'react';
import styled from 'styled-components';

const ListItemStyled = styled.li`
  display: flex;
  list-style: none;
  align-items: center;
  margin-bottom: 2.7rem;
  width: 100%;

  input {
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 0.7rem;
  }

  label {
    font-size: 1.8rem;
    font-weight: 500;
    flex: 1;
  }

  input:checked ~ label{ 
    text-decoration: line-through;
    color: #333;
  }

  button {
    border: none;
    background: transparent;
    cursor:pointer;
  }

  button svg {
    fill: #BDBDBD;
  }
`;

const ListItem = ({ 
  label,
  onChange,
  id,
  checked,
  children 
}) => {
  
  return (
    <ListItemStyled onChange={onChange}>
      <input id={`input_${id}`} type='checkbox' defaultChecked={checked}/>
      <label htmlFor={`input_${id}`}>{label}</label> 
      {children}
    </ListItemStyled>
  );
}

export default ListItem;