import React, { Component } from 'react';

class WordsList extends Component {
  render() {
    return (
      <ul>
        {this.props.deck.cards.map(item => (
          <li key={item.baseText}>
            <span>{item.baseText}</span>
            <span>{item.emoji}</span>
            <span>{item.targetText}</span>
          </li>
        ))}
      </ul>
    );
  }
}

export default WordsList;