import React, { Component } from 'react'
import InputTask from '../InputTask/InputTask';

export default class ToDoListApp extends Component {

  constructor(props){
    super(props);

    this.state = {
      taches : [],
      description:''
    }
  }

  addTache = ()=> {
    this.setState({taches: [...this.state.taches, {descr:this.state.description, completed:false}]})
  }
  render() {
    return (
      <div>
        <InputTask onAddClick={this.addTache} onChangeDesc={(e) => this.setState({description: e.target.value})} description={this.state.description} />
      </div>
    )
  }
}

