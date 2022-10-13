import React from 'react'
import styles from './Task.module.css'

export default function Task(props) {
  return (
    <div className={styles.task}>
        <h2>{props.tache.completed ? <del>{props.tache.descr}</del>:props.tache.descr}</h2>
        <button onClick={props.terminerOnClick} disabled={props.tache.completed}>Terminer</button>
        <button onClick={props.encoursOnClick} disabled={!props.tache.completed}>En cours</button>
        <button onClick={props.deleteOnClick}>Supprimer</button>
    </div>
  )
}
