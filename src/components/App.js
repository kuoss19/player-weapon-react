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
      status: 'INITIAL',
      messages: [
        {
          text: `${this.firstPlayer.name} 와(과) ${this.secondPlayer.name} 이(가) 입장했습니다!`
        }
      ]
    };
  }

  addMessages = message => {
    const { messages } = this.state;
    this.setState({ messages: [...messages, message] });
  };

  render() {
    const { status, messages } = this.state;

    return (
      <div className="App">
        <AppStyle />
        <Header />
        <Battle
          firstPlayer={this.firstPlayer}
          secondPlayer={this.secondPlayer}
        />
        <Console messages={messages} />
      </div>
    );
  }

  componentDidUpdate(_prevProps, prevState) {
    const { status: prevStatus } = prevState;
    const { status } = this.state;
    if (status !== prevStatus && status === 'PLAYER_DIED') {
      // TODO: 사람이 뒤졌습니다 메시지
    }
  }
}

export default App;
