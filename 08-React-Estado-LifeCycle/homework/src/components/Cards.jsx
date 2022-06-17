import React from 'react';
import './Cards.css';
import Card from './Card.jsx';
import styled from 'styled-components';


const ContainerCard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`
export default function Cards({cities, onClose}) {
  if(cities){
    return (
      <ContainerCard>
        {cities.map(city => <Card
            key={city.id}
            max={city.max}
            min={city.min}
            name={city.name}
            img={city.img}
            onClose={() => onClose(city.id)}
            id={city.id}
          /> )}
      </ContainerCard>
    );
  } else {
    return(
      <div>Sin ciudades</div>
    )
  }
}
