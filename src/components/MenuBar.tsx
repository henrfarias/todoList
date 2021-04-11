import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IDecorateMenu } from '../Interfaces/IDecorateMenu';
import NavStyle from '../styles/NavStyle';

const MenuBarStyled = styled.nav<IDecorateMenu>`
  display: flex;
  justify-content: space-around;
  
  width: 100%;
  border-bottom: 1px solid #BDBDBD;


  a {
    font-weight: 600;
    font-size: 1.4rem;    
    text-decoration: none;
    color: #333;
    padding: 0 3rem 1.8rem;
  

    :nth-child(${props => props.index}) {
      position: relative;
    }  
  }

`;

const MenuBar: React.FC<IDecorateMenu> = ({ index }) => { 
  return (
    <MenuBarStyled index={index}>
      <Link to='/'>All {index === '1' && <NavStyle />} </Link>
      <Link to='/active'>Active {index === '2' && <NavStyle />} </Link>
      <Link to='/done'>Completed {index === '3' && <NavStyle />} </Link>
    </MenuBarStyled>
  );
}

export default MenuBar;