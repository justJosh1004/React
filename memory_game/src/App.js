import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CardList from './CardList';
import CardData from './CardData';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myCardData: CardData(),
    }

    this.changeSide = this.changeSide.bind(this);
  }

  changeSide(id) {
    // let tempCard = this.state.myCardData;
    const tempCard = this.state.myCardData;
        //let deleteme = -1;
    for(let i = 0; i < tempCard.length; i++)
    {
      if (tempCard[i].id === id)
      {
        //deleteme = i;
        if(tempCard[i].front === "FRONT")
        {
          tempCard[i].front = "BACK";
        }
        else
        {
          tempCard[i].front = "FRONT";
        }
      }
    }

    this.setState({
      myCardData: tempCard,
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="main">
            <CardList cardData={this.state.myCardData} changeSide={this.changeSide} />
        </div>
      </div>
    );
  }
}

export default App;
