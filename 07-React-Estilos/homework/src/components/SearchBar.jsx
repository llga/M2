import React from 'react';
import styled from 'styled-components';


const Search = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
  margin-block-start: 1rem;
`

const InputSearch = styled.input`
display: inline-block;
color: white;
border-radius: 1.25rem;
padding-inline-start: 2rem;
border: none;
max-inline-size: 22rem;
width: 100%;
padding: .5rem;
padding-inline-start: 2rem;
background: #0d1011;
border: 2px solid white;
`
const Button = styled.button`
  inline-size: 7.5rem;
  block-size: 2.75rem;
  background: #A7233A;
  /* background: transparent; */
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  color: white;
  &:hover {
    background: #A7233A;
    color: white;
    opacity: .75;
  }
`

export default function SearchBar({onSearch}) {
  // acá va tu código
  const search = () => {
    const inputSearch = document.querySelector("#inputSearch")
    onSearch(inputSearch.value)
    inputSearch.focus()
  }
  return <Search>
    <InputSearch id='inputSearch' type="text" placeholder="Ciudad..." />
    <Button onClick={search}>Buscar</Button>
  </Search>
};