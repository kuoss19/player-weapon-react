import React from 'react';
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
  attack = async player => {
    const { name, power, weapon } = player;
    const { firstPlayer, secondPlayer, setStatus, addMessages } = this.props;
    const target = firstPlayer.name === name ? secondPlayer : firstPlayer;
    target.hp -= power;

    await addMessages({
      text: `${name}이(가) ${target.name}을(를) ${weapon}(으)로 공격했습니다!`
    });

    if (target.hp <= 0) {
      await addMessages({
        text: `${target.name}이(가) 사망하였습니다!`,
        emphasize: true,
        color: 'red'
      });
      setStatus('PLAYER_DIED');
    }
  };

  render() {
    const { firstPlayer, secondPlayer } = this.props;
    return (
      <BattleWrapper>
        <BattleContainer>
          <Player {...firstPlayer} attack={this.attack} />
          <Player {...secondPlayer} attack={this.attack} />
        </BattleContainer>
      </BattleWrapper>
    );
  }
}

export default Battle;
