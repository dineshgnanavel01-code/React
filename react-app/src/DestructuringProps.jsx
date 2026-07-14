import React from 'react';

export default function DestructuringProps({ name, age, city, phone }) {
  return (
    <div>
      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>
      <h3>City: {city}</h3>
      <h3>Phone: {phone}</h3>
    </div>
  );
}
