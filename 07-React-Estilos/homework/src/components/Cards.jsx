import React from 'react';
import Card from './Card.jsx';
import styled from 'styled-components';


const ContainerCard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map
  if (!cities || cities.length === 0) {
    return <div>Cargando...</div>
  }

  return (<ContainerCard>{
    cities.map((city) => {
      return <Card
        key={city.id}
        max={city.main.temp_max}
        min={city.main.temp_min}
        name={city.name}
        img={city.weather[0].icon}
        onClose={() => alert(city.name)}
      />
    })
  }
  </ContainerCard>)
};