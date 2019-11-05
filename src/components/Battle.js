import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Player from './Player';

const BattleWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const BattleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

class Battle extends React.Component {
  static propTypes = {
    firstPlayer: PropTypes.shape({
      name: PropTypes.string.isRequired,
      power: PropTypes.number.isRequired,
      hp: PropTypes.number.isRequired
    }).isRequired,
    secondPlayer: PropTypes.shape({
      name: PropTypes.string.isRequired,
      power: PropTypes.number.isRequired,
      hp: PropTypes.number.isRequired
    }).isRequired
  };

  render() {
    return (
      <BattleWrapper>
        <BattleContainer>
          <Player {...this.props.firstPlayer} />
          <Player {...this.props.secondPlayer} />
        </BattleContainer>
      </BattleWrapper>
    );
  }
}

export default Battle;
