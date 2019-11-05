import React from 'react';
import styled from 'styled-components';
import { Weapon } from '../models';
import WeaponComponent from './Weapon';

const PlayerActionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const AttackButton = styled.button`
  margin: 0 10px;
  background-color: #4287f5;
  color: #ffffff;
  border-radius: 8px;
  height: 28px;
  width: 56px;
  font-size: 14px;
`;

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
    <PlayerActionWrapper>
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
      <AttackButton onClick={handleAttack}>공격</AttackButton>
    </PlayerActionWrapper>
  );
}

export default PlayerAction;
