import React, { Component } from 'react';
import KeyHandler, {KEYPRESS} from 'react-key-handler';
import logo from './logo.svg';
import './App.css';


class FormInput extends React.Component {

   render() {

    let inputStyle = {
      border: '2px solid',
      borderRadius: '25px',
      height: '50px',
      width: '40%',
    }

      // return (
      //   <div>
      //     <input type="text" style={inputStyle} placeholder = "What needs to be done?"
      //       value={this.props.myDataProp} onChange = {this.props.updateStateProp} />
      //       <h3>{this.props.myDataProp}</h3>
      //   </div>
      // );
      return null;
   }
}

class TestInput extends React.Component {
  render() {

      return (
        <div>
          <input type="text" placeholder = "What needs to be done?" value={this.props.myTestProp}
                  onKeyDown={this.props.testStateProp} autoFocus={true} />
            <h3>{this.props.myTestProp}</h3>
        </div>
      );
   }
}


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNewTodoKeyDown = this.handleNewTodoKeyDown.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  handleNewTodoKeyDown(event) {
    if (event.keyCode !== 13) {
      return;
    }
    event.preventDefault();
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
     this.setState({
      value: event.target.value,
    })
  }


  render() {

    let needsStyle = {
      marginLeft: '20%',
      border: '2px solid',
      height: '50px',
      width: '60%',
    }

    let toDoStyle = {
      border: '2px solid',
      borderRadius: '25px',
    };

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <div className="form-todo">
            <form>
              <fieldset style={toDoStyle} >
                <legend>List Need To Do:</legend>
                <form onSubmit={this.handleSubmit}>
                  <FormInput myDataProp = {this.state.value} 
                     updateStateProp = {this.handleChange} />
                </form>
                <TestInput myTestProp={this.state.value} testStateProp={this.handleNewTodoKeyDown}  
                testStateChange={this.handleChange} />
                <input type="text" placeholder = "What needs to be done?"
                  onKeyDown={this.handleNewTodoKeyDown} />
                <br /><br />
                <div>
                  <table style={needsStyle}>
                    <tr>
                      <td><button type="button">Complete</button></td>
                      <td><p>1 Item Left</p></td>
                      <td><button type="button">Delete</button></td>
                    </tr>
                  </table>
                </div>
                <br />
                <div className="todo-info" >
                  <table style={needsStyle}>
                    <tr>
                      <td><p>1 Item Left</p></td>
                      <td><button type="button">All</button></td>
                      <td><button type="button">Active</button></td>
                      <td><button type="button">Completed</button></td>
                    </tr>
                  </table>
                </div>

              </fieldset>
            </form> 
          </div>            
        </div>  

      </div>
    );
  }
}

export default App;
