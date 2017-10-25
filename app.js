
var GroceryList = (props) => (
  <ul>
    {props.groceries.map((grocery, i) => (
      <GroceryListItem item={grocery} key={i}/>
    ))}
  </ul>
);
//shouldn't use i as key unless absolutely necessary 😐

// var GroceryListItem = (props) => (
//   <li>{props.item}</li>
// )

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }
  
  onListItemMouseOver() {
    this.setState({
      hover: true
    });
  }
  
  onListItemMouseOut() {
    this.setState({
      hover: false
    });
  }
  
  render() {
    var style = {
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };
    
    return (
      <li style={style} onMouseOver={this.onListItemMouseOver.bind(this)} onMouseOut={this.onListItemMouseOut.bind(this)}>{this.props.item}</li>
    );
  }
}

var App = () => (
  <div>
    <h2>My Todo List</h2>
    <GroceryList groceries={['Kale', 'Cucumber']}/> 
  </div>
);
// 😵 we are creating an instance of the `TodoList` component

ReactDOM.render(<App />, document.getElementById("app"));
