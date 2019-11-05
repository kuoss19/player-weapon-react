import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './Header';
import Battle from './Battle';
import Console from './Console';
import { Player } from '../models';

const AppStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
  div {
    width: 80%;
    margin: 0 auto;
  }
  h2 {
    margin: 0;
    font-size: 2rem;
  }
  p {
    margin: 0;
    font-size: 14px;
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.firstPlayer = new Player({ name: '철수', power: 10 });
    this.secondPlayer = new Player({ name: '영희', power: 20 });

    this.state = {
      status: 'BATTLE_IN_PROGRESS',
      messages: [
        {
          text: `${this.firstPlayer.name} 와(과) ${this.secondPlayer.name} 이(가) 입장했습니다!`
        }
      ]
    };
  }

  addMessages = async message => {
    const { messages } = this.state;
    this.setState({ messages: [...messages, message] });
  };

  setStatus = newStatus => {
    this.setState({ status: newStatus });
  };

  render() {
    const { messages } = this.state;
    return (
      <div className="App">
        <AppStyle />
        <Header />
        <Battle
          setStatus={this.setStatus}
          firstPlayer={this.firstPlayer}
          secondPlayer={this.secondPlayer}
          addMessages={this.addMessages}
        />
        <Console messages={messages} />
      </div>
    );
  }

  async componentDidUpdate(_prevProps, prevState) {
    const { status: prevStatus } = prevState;
    const { status } = this.state;
    if (status !== prevStatus && status === 'PLAYER_DIED') {
      await this.addMessages({
        text: '배틀이 종료되었습니다',
        emphasize: true,
        color: 'blue'
      });
    }
  }
}

export default App;
