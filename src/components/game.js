import React from 'react';
//import { connect } from 'react-redux';
import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';

export default function Game(props) {
  //export default class Game extends React.Component {
  /*  restartGame(correctAnswer) {
      this.props.dispatch(restartGame(correctAnswer));
    }
  
    makeGuess(guess) {
      this.props.dispatch(makeGuess(guess));
    }
  
    generateAuralUpdate() {
      this.props.dispatch(generateAuralUpdate(feedback));
    }
  
    render() {
      const { feedback, guesses, auralStatus } = this.state;
      const guessCount = guesses.length;*/

  return (
    <div>
      <Header
      //onRestartGame={() => this.props.dispatch(restartGame())}
      //onGenerateAuralUpdate={() => this.props.dispatch(generateAuralUpdate())}
      />
      <main role="main">
        <GuessSection
        //feedback={feedback}
        //guessCount={guessCount}
        //onMakeGuess={guess => this.makeGuess(guess)}
        />
        <StatusSection //guesses={guesses}
        //auralStatus={auralStatus}
        />
        <InfoSection />
      </main>
    </div>
  );
}

//Game.defaultProps = {};

//const mapStateToProps = state => ({});

//export default connect(mapStateToProps)(Game);
