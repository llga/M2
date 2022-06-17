import React from 'react';
// import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import styled from 'styled-components';

const NavStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-block-end: 1rem;
  padding-block-start: 1.5rem;
  padding-inline-end: .8rem;
  padding-inline-start: .8rem ;
`
const Title = styled.h1`
  color: white;
  font-size: 2rem;
`

function Nav({ onSearch }) {
  return (
    <NavStyle>
      <Title> Weather App</Title>
      <SearchBar onSearch={onSearch} />
    </NavStyle>
  );
};

export default Nav;
