import React from 'react';

class ListCars extends React.Component {
  render() {
    const items = ['Ford', 'BWM', 'Audi'];

    return (
      <div>
        <ul>
          {items.map(item => (
            <li key={item}><strong>I am a {item}</strong></li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListCars;
