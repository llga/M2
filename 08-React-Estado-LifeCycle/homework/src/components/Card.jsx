import React from 'react';
import './Card.css';
import styled from 'styled-components';
import imgHot from '.././images/waves-hot.png';
import imgCold from '.././images/waves-cold.png';

const CardStyled = styled.div`
  align-items: center;
  background-image:
  ${({min}) => {
    if (min >= 20) {
      return `url(${imgHot})`;
    } else {
      return `url(${imgCold})`;
    }
  }};
  /* background-color: #383838 ; */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  block-size: 8rem;
  border-radius: 1rem;
  border: 2px solid white;
  /* color: #fff; */
  color: #2a2c2d;
  display: flex;
  flex-direction: row-reverse;
  font-family: 'Mulish', sans-serif;
  inline-size: 24rem;
  justify-content: space-between;
  margin: .4rem ;
  position: relative;
  &:hover {
    opacity: .75;
  }
  `
const CardHead = styled.div`
  align-items: center;
  block-size: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-inline-end:.5rem ;
`
const CardTitle = styled.div`
  block-size: 4rem;
  /* font-size: 1.5rem; */
  font-weight: bold;
  /* padding-block-end: .8rem;
  padding-block-start: .8rem; */
`
const Title = styled.h3`
  color: white;
  font-size: 2rem;
`
const CardImage = styled.div`
  block-size: 4rem;
  margin-block-end: .5rem;
`
const CardTemp = styled.div`
  align-items: flex-start;
  block-size: 5rem;
  color: #1f1f1f;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  /* font-weight: bolder; */
  inline-size: 10rem;
  justify-content: center;
  margin-inline-start: .8rem ;
`
const CardTempTitle = styled.div`
  font-size: 1.2rem;
  /* color: white; */
  /* font-weight: bold; */
`
const CardTempValue = styled.div`
  font-size: 1.8rem;
  font-weight:  bold;
`
const CardTempMin = styled.div`
  align-items: center;
  color: #dadada;
  display: flex;
  flex-direction: row;
  gap: .8rem;
  inline-size: 20rem;
  justify-content: flex-start;
  padding: .1rem;
  `
const CardTempMax = styled.div`
align-items: center;
display: flex;
flex-direction: row;
gap: .8rem;
inline-size: 20rem;
justify-content: flex-start;
padding: .1rem ;

`
const CardClose = styled.div`
  block-size: .3rem;
  inline-size: .3rem ;
  position: absolute;
`
const ButtonClose = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  text-decoration: none;
  border-radius: 50%;
  padding: .2rem;
  position: absolute;
  bottom: 2rem;
  right: .5rem;
  opacity: 0; // para que no se vea hasta que se haga click
  transform: translateY(0.2rem);
  will-change: opacity, transform;
  transition: .3s opacity, .3s transform;
  &:hover {
    opacity: 1;
    transform: translateY(-0.1rem);
    border: 1px solid transparent;
  }
`

export default function Card({ min, max, name, img, onClose, id }) {
  return (
    <CardStyled min={min} >
      <CardClose>
        <ButtonClose onClick={onClose}>X</ButtonClose>
      </CardClose>
      <CardHead>
        <CardImage>
          <img src={"http://openweathermap.org/img/wn/" + img + "@2x.png"} width="80" height="80" alt="" />
        </CardImage>
        <CardTitle>
          <Title>{name}</Title>
        </CardTitle>
      </CardHead>
      <CardTemp>
        <CardTempMin>
          <CardTempTitle>Min</CardTempTitle>
          <CardTempValue>{min}°</CardTempValue>
        </CardTempMin>
        <CardTempMax>
          <CardTempTitle>Max</CardTempTitle>
          <CardTempValue>{max}°</CardTempValue>
        </CardTempMax>
      </CardTemp>
    </CardStyled>
  );
};
