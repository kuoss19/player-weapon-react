import React from 'react';
import styled from 'styled-components';
import PlayerAction from './PlayerAction';

const PlayerWrapper = styled.div`
  h2,
  h3 {
    margin: 0;
  }
`;

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      power: this.props.power,
      weapon: ''
    };
  }

  handleWeaponSelect = event => {
    const { name, value } = event.currentTarget;
    this.setState({ weapon: name, power: value });
  };

  handleAttack = event => {
    const { attack, name } = this.props;
    const { weapon, power } = this.state;
    attack({ name, weapon, power });
  };

  render() {
    const { name, hp } = this.props;
    const { power } = this.state;

    return (
      <PlayerWrapper>
        <div className="player-info">
          <h2>{name}</h2>
          <h3>{`공격력: ${power}`}</h3>
          <h3>{`체력: ${hp}`}</h3>
        </div>
        <PlayerAction
          selected={this.state.weapon}
          onWeaponSelect={this.handleWeaponSelect}
          onAttack={this.handleAttack}
        />
      </PlayerWrapper>
    );
  }
}

export default Player;
