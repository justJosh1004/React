import React, { Component } from 'react';

import Card from './Cards';

class CardList extends Component {
  render() {
    return (
    <div>
      {
        this.props.cardData.map((item, index) => {
          return <Card memory={item} key={index} changeSide={this.props.changeSide}/>
        })
      }
    </div>
    );
  }
}

export default CardList;
