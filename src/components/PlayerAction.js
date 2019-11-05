import React from 'react';
import { Weapon } from '../models';
import WeaponComponent from './Weapon';

function PlayerAction({
  selected,
  onWeaponSelect: handleSelect,
  onAttack: handleAttack
}) {
  const availableWeapons = [
    new Weapon({ name: '칼', power: 50 }),
    new Weapon({ name: '총', power: 100 })
  ];

  return (
    <div>
      <form>
        {availableWeapons.map(({ name, power }, index) => (
          <WeaponComponent
            key={index}
            name={name}
            selected={selected === name}
            power={power}
            onChange={handleSelect}
          />
        ))}
      </form>
      <div onClick={handleAttack}>공격</div>
    </div>
  );
}

export default PlayerAction;
