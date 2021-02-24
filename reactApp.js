// Deafault App component that all other compents are rendered through
function App(props){
  return (
    <div>
      <h1>Welcome to the sports game starter</h1>
      <Team />
    </div>
    
  )
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

class Team extends React.Component {
  constructor( props ) {
    super( props )
    this.state = {
      score: 0,
      shots: 0,
      shotPercentage: 0,
    }
  }

  shootFunction = () => {
    let missSound = new Audio( "miss.wav" );
    let hitSound = new Audio( "hit.wav" );
    
    if (getRandomInt(5)) {
      this.setState((state) => ({
        score: state.score + 1,
      } ) );
      hitSound.play();
    }
    this.setState( ( state ) => ( {
      shots: state.shots + 1
    } ) )
    missSound.play();
  }



  render() {
    return (
      <div>
        <p>Shots Taken: {this.state.shots}</p>
        <p>Team Score: {this.state.score}</p>
        <button onClick={this.shootFunction}>Shot</button>
      </div>
    );
  }

}
  
//Render the application
ReactDOM.render(
  <App />,
  document.getElementById('root')
);