import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PlayerAction from './PlayerAction';

const PlayerWrapper = styled.div`
  h2,
  h3 {
    margin: 0;
  }
`;

class Player extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    power: PropTypes.number.isRequired,
    hp: PropTypes.number.isRequired
  };

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
    event.preventDefault();
    // TODO: 실제로 공격해서 애새끼들 체력 깎기
    // TODO: 로그띄우기
  };

  render() {
    const { name, power, hp } = this.props;

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
