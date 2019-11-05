import React from 'react';
import PropTypes from 'prop-types';

function Weapon({ name, power, selected, onChange: handleChange }) {
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

Weapon.propTypes = {
  name: PropTypes.string.isRequired,
  power: PropTypes.number.isRequired,
  selected: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Weapon;
