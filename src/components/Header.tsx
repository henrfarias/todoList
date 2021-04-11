import React from 'react';
import styled from 'styled-components';

const HeaderStyled = styled.header`
  /* align-items: center; */
  /* justify-content: center; */

  padding: 3.2rem 0 5.8rem;

  font-family: 'Raleway', sans-serif;
  color: #333;

  h1 {
    font-size: 3.6rem;
    text-align: center;
  }
`; 

const Header = () => {
  return(
    <>
      <HeaderStyled>
        <h1>#todo</h1>
      </HeaderStyled>
    </>
  );
  
}

export default Header;