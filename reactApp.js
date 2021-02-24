// Deafault App component that all other compents are rendered through
function App(props){
  return (
    <div>
      <h1>Welcome to the sports game starter</h1>
      <Team name="Tree" pic="tree.jpeg"/>
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

  shotPercentage = () => {
    if (this.state.shots) {
      return ((this.state.score/this.state.shots)*100).toFixed([0])
    }
  }

  render() {
    return (
      <div>
        <h1>Team: {this.props.name}</h1>
        <img src = {this.props.pic} />
        <p>Shots Taken: {this.state.shots}</p>
        <p>Team Score: {this.state.score}</p>
        <p>Shot Percentage: {this.shotPercentage()}%</p>
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