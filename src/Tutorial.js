import React, { Component } from 'react';
// plugin handler but can't use for form
// import KeyHandler, {KEYPRESS} from 'react-key-handler';
// import logo from './logo.svg';
import './App.css';


// Method 1 (See the return process, remember to use "return" if use "{}")
// class TodoList extends Component{
  
//   render(){

//     return(
//       <ul className="list-group">
//         {
//           this.props.todos.map(todo => {
//             return <li todo={todo} key={todo.id} className="list-group">{todo.name}</li>
//           })
//         }
//       </ul>
//     );
//   }
// }

// Method 2 (Compare this method with method 1 when return the element)
// function TodoList(props){

//   const todosVal = props.todos;
//   const listItems = todosVal.map(todo => 
//     <li key={todo.id} className="list-group-item">{todo.name}</li>
//   ); 

//   return(
//     <ul className="list-group">
//       {listItems}
//     </ul>
//   );
// }

// Method 3 (Compare this method with methode 1)
class TodoList extends Component{
  
  onDelete(todo){
      this.props.deleteTodo(todo);
  }

  onEdit(todo){
    this.props.editTodo(todo);
  }

  render(){

    let linkStyle = {
      color: 'red',
    }

    const todosVal = this.props.todos;
    const listItems = todosVal.map(todo => 
      <li className="list-group-item" key={todo.id}>
      <span onClick={this.onEdit.bind(this, todo)}>{todo.name}</span>
      <a onClick={this.onDelete.bind(this, todo)} className="delete" style={linkStyle} href=""> x</a></li>
    ); 

    return(
      <ul className="list-group">
       {listItems}
      </ul>
    );
  }
}


class TodoForm extends Component{
  
  constructor(props) {
    super(props);

    this.onTodoSubmit = this.onTodoSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onTodoSubmit(e){
      e.preventDefault();
      var text = this.refs.text.value.trim();

      if(!text){ 
        alert('Please enter a todo');
        return;
      }
      
      if(this.props.isEdit){
        var updatedTodo = {
          id:this.props.isEdit,
          name: text
        }
        this.props.onTodoUpdate(updatedTodo);
      }else{
        this.props.onTodoAdd(text);
      }
     
      this.refs.text.value = '';
  }

  onChange(e){
    // console.log('Changing Text ...')
    this.props.changeText(e.target.value);
  }

  render(){
    
    return(
      <div>
        <form onSubmit={this.onTodoSubmit.bind()}>
          <div className="form-group">
              <label>Todo Text </label>
              <input type="text" ref="text" value={this.props.text} onChange={this.onChange} className="form-control"/>
          </div>
        </form>
      </div>
    );
  }
}

class Tutorial extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      isEdit: 0,
      todos: [
          {
            id: 1,
            name: 'Meeting At Work'  
          },
          {
            id: 2,
            name: 'Bring Kids To School'
          },
          {
            id: 3,
            name: 'Food Shopping'
          }        
      ],
    };
    this.handleTodoAdd = this.handleTodoAdd.bind(this);
    this.handleTodoDelete = this.handleTodoDelete.bind(this);
    this.handleTodoEdit = this.handleTodoEdit.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleTodoUpdate = this.handleTodoUpdate.bind(this);
  }

  handleTodoAdd(text){
     var newTodo = {
      id: this.state.todos.length+1,
      name: text
    }

    this.setState({todos: this.state.todos.concat(newTodo)});
  }

  handleTodoDelete(todo){
    var todos = this.state.todos;
    for(var i = 0; i < todos.length; i++){
      if(todos[i].id === todo.id){
        todos.splice(i,1);
      }
    }
    this.setState({todos: todos});
  }

  handleTodoEdit(todo){
    // console.log(todo.name);
    this.setState({
      text: todo.name,
      isEdit: todo.id
    });
  }

  handleChangeText(text){
    this.setState({text: text})
  }

  handleTodoUpdate(todo){
    var todos = this.state.todos;
    for(var i = 0; i < todos.length; i++){
      if(todos[i].id === todo.id){
        todos.splice(i,1);
      }
    }
    todos.push(todo);
    this.setState({todos: todos});
  }

  render() {

    return (
      <div>
        <TodoForm 
          {...this.state}
          onTodoUpdate={this.handleTodoUpdate}
          changeText={this.handleChangeText}
          onTodoAdd={this.handleTodoAdd}
        />
        
        <TodoList 
          {...this.state}
          // the above code is similar with this -> todos={this.state.todos} 
          editTodo={this.handleTodoEdit} 
          deleteTodo={this.handleTodoDelete} 
        />
      </div>
    );
  }
}

export default Tutorial;
