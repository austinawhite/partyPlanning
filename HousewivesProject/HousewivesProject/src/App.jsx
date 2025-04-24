import { useEffect, useState } from 'react';
import './App.css';

const showIds = [
  { id: 597, city: 'Atlanta' },
  { id: 521, city: 'New Jersey' },
  { id: 49980, city: 'Salt Lake City' }
];

function App() {
  const [castList, setCastList] = useState([]);

  useEffect(() => {
    Promise.all(
      showIds.map(show =>
        fetch(`https://api.tvmaze.com/shows/${show.id}/cast`)
          .then(res => res.json())
          .then(data => data.map(member => ({ ...member, city: show.city })))
      )
    )
      .then(allCast => setCastList(allCast.flat()))
      .catch(err => console.error('Error fetching cast data:', err));
  }, []);

  const addToRoster = (name, city) => {
    alert(`Added ${name} from ${city} to the cast!`);
    // You could update a stateful "roster" list here
  };

  return (
    <div className="App">
      <h1>Real Housewives Cast</h1>
      <div id="cast-container" className="cast-container">
        {castList.map(member => {
          const name = member.person.name;
          const city = member.city;
          const img = member.person.image?.medium || '';

          return (
            <div key={name + city} className="cast-member card">
              <img src={img} alt={name} width="80" />
              <strong>{name}</strong> ({city})
              <br />
              <button onClick={() => addToRoster(name, city)}>Add to Cast</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
