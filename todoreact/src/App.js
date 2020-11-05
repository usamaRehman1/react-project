// import logo from './logo.svg';
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoItems: [],
    }
    this.delete = this.delete.bind(this);
  }

  add = () => {
    let todoItems = this.state.todoItems;
    let item = this.refs.item.value;

    var checkVal = (item !== undefined && item !== null && item !== '' && item !== ' ') ? true : false;

    if (checkVal) {
      todoItems.push(item)
      this.setState({
        todoItems: todoItems,
      })
      this.refs.item.value = ''
    } else {
      alert('somthing is wrong.. ')
    }
  }

  deleteAll = () => {
    let todoItems = this.state.todoItems;
    this.setState({
      todoItems: [],
    })
    // console.log(todoItems)
  }

  edit = (ev) => {
    // console.log(ev.target.id)
    let todoItems = this.state.todoItems;

    let editItems = todoItems[ev.target.id];
    let getEditItems = prompt(`You Edit index=${ev.target.id}`, editItems);
    todoItems[ev.target.id] = getEditItems;

    this.setState({
      todoItems: todoItems,
    })
    // console.log(this.state.todoItems)
  }

  delete(ev) {
    console.log(ev.target.id)
    let todoItems = this.state.todoItems;
    todoItems.splice(ev.target.id, 1);

    this.setState({
      todoItems: todoItems,
    })
  }

  render() {
    return (
      <div className='App'>
        <h1>TODO REACT</h1>
        <input type='text' ref='item' />
        <button onClick={this.add}>ADD</button>
        <button onClick={this.deleteAll}>DELETE ALL</button><br /><br />
        <ul>
          {this.state.todoItems.map((v, i) => {
            return <li key={i}>{v}<button id={i} onClick={this.edit}>EDIT</button><button id={i} onClick={this.delete}>DELETE</button></li>
          })}
        </ul>
      </div>
    );
  }
}

export default App;
