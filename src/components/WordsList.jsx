import React, { Component } from 'react';

class WordsList extends Component {
  render() {
    return (
      <div className="wordsList">
        <h2>Your Vocabulary List</h2>
        {this.props.deck.cards.map(item => (
          <p key={item.baseText}>
            <span>{item.baseText}</span>
            <span>{item.emoji}</span>
            <span>{item.targetText}</span>
          </p>
        ))}
      </div>
    );
  }
}

export default WordsList;