import React, {useState} from "react";
import styled from 'styled-components';

const Search = styled.form`
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

  const [input, setInput] = useState('');
  const handleInput = (e) => {
    setInput(e.target.value);
  }
  return (
    <Search onSubmit={(e) => {
      e.preventDefault();
      onSearch(input);
      setInput('');
    }}>
      <InputSearch
        type="text"
        value={input}
        onChange= {handleInput}
        placeholder="Ciudad..."
      />
      <Button type="submit">Agregar</Button>
    </Search>
  );
}
