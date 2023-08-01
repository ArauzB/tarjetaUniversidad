import React from 'react';
import './App.css';

const universitiesData = [
  {
    name: 'Universidad de San Carlos de Guatemala',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Usac_logo.png',
    vision: 'Ser el ente que impulse la solución de problemas nacionales a través de la generación del conocimiento científico, mediante la vinculación con todos los sectores de la sociedad y la promoción de la ciencia y la tecnología.',
  },
  {
    name: 'Universidad del Valle de Guatemala',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Uvg_logo.jpg',
    vision: 'Entregar a Guatemala y el mundo personas ingeniosas y comprometidas.',
  },
  {
    name: 'Universidad Rafael Landívar',
    logoUrl: 'https://consystec-dev.com/TEMPORAL/URL/logourl.png',
    vision: 'Se destaca por ser el mejor sistema universitario de la región, caracterizado por ser una comunidad académica con una identidad distintiva, motivada, comprometida y servicial.',
  },
];

const UniversityCard = ({ name, logoUrl, vision }) => {
  return (
    <div className="card">
      <img src={logoUrl} alt={name} />
      <h3>{name}</h3>
      <p>{vision}</p>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>Universidades de Guatemala</h1>
      <div className="card-container">
        {universitiesData.map((university, index) => (
          <UniversityCard
            key={index}
            name={university.name}
            logoUrl={university.logoUrl}
            vision={university.vision}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
