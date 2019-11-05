import React from 'react';

export default function Weapon({
  name,
  power,
  selected,
  onChange: handleChange
}) {
  return (
    <React.Fragment>
      <input
        type="radio"
        id={name}
        name={name}
        value={power}
        checked={selected}
        onChange={handleChange}
      />
      <label htmlFor={name}>{name}</label>
    </React.Fragment>
  );
}
