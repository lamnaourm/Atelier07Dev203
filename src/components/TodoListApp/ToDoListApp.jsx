import React, { Component } from "react";
import DeleteTasks from "../DeleteTasks/DeleteTasks";
import FilterTasks from "../FilterTasks/FilterTasks";
import InformationTask from "../InformationTask/InformationTask";
import InputTask from "../InputTask/InputTask";
import Task from "../Task/Task";
import styles from './todolistapp.module.css'

export default class ToDoListApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taches: [],
      description: "",
      filter:1,
    };
  }

  addTache = () => {
    if (
      this.state.taches.filter(
        (item) =>
          item.descr.toUpperCase() === this.state.description.toUpperCase()
      ).length > 0
    ) {
      alert("Tache existe deja.");
      return;
    }
    this.setState({
      taches: [
        ...this.state.taches,
        { descr: this.state.description, completed: false },
      ],
    });
  };

  terminerTache(e, des) {
    let Mtaches = this.state.taches.map((item) => {
      if (item.descr === des) return { ...item, completed: true };
      else return item;
    });
    this.setState({ taches: Mtaches });
  }
  encoursTache(e, des) {
    let Mtaches = this.state.taches.map((item) => {
      if (item.descr === des) return { ...item, completed: false };
      else return item;
    });
    this.setState({ taches: Mtaches });
  }
  supprimerTache(e, des) {
    if (window.confirm("suprimer ?")) {
      let Mtaches = this.state.taches.filter((item) => item.descr !== des);
      this.setState({ taches: Mtaches });
    }
  }

  deleteAll = ()=> {
    this.setState({taches:[]})
  }

  deleteTermine = () => {
    let Mtaches = this.state.taches.filter((item) => item.completed===false);
    this.setState({ taches: Mtaches });
  }

  filterTasks = () => {
    switch(this.state.filter){
      case 1: return this.state.taches;
      case 2: return this.state.taches.filter(item => item.completed);
      case 3: return this.state.taches.filter(item => !item.completed);
    }
  }
  render() {
    return (
      <div className={styles.ToDoListApp}>
        <InputTask
          param={this.value}
          onAddClick={this.addTache}
          onChangeDesc={(e) => this.setState({ description: e.target.value })}
          description={this.state.description}
        />

        <InformationTask taches={this.state.taches}/>

        <FilterTasks filter={this.state.filter} All={() => this.setState({filter:1})} Termine={() => this.setState({filter:2})} Encours={() => this.setState({filter:3})}/>

        <div className={styles.listtaches}>
          {this.filterTasks().map((item, index) => (
            <Task
              key={index}
              tache={item}
              terminerOnClick={(e) => this.terminerTache(e, item.descr)}
              encoursOnClick={(e) => this.encoursTache(e, item.descr)}
              deleteOnClick={(e) => this.supprimerTache(e, item.descr)}
            />
          ))}
        </div>

        <DeleteTasks deleteAll={this.deleteAll} deleteTermine={this.deleteTermine}/>
      </div>
    );
  }
}
