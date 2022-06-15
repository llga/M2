
export default function Card({ max, min, name, img, onClose }) {
  // acá va tu código
  return (
    <div>
      <button onClick={onClose}>X</button>
      <h3>{name}</h3>
      <div>
        <div>
          <p>Min</p>
          <span>{min}</span>
        </div>
        <div>
          <p>Max</p>
          <span>{max}</span>
        </div>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt={`clima de ${name} `}/>
      </div>
    </div>
  )
};