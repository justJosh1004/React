import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className={"card " +this.props.hotdog.color}>
        <h1>{this.props.hotdog.title}</h1>
        <p>{this.props.hotdog.text}</p>
        <p>{this.props.hotdog.id}</p>
      </div>
    );
  }
}

export default Card;
