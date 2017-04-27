import React, { Component } from 'react';

class Card extends Component {

  render() {
    return (
      <div className="card" onClick={() => {this.props.changeSide(this.props.memory.id)}}>
        <h1>{this.props.memory.front}</h1>
        <p>{this.props.memory.id}</p>
      </div>
    );
  }
}

export default Card;
