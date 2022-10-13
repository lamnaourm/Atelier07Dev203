import React from 'react'
import styles from './Task.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faCheckCircle, faTruckLoading } from '@fortawesome/free-solid-svg-icons'

export default function Task(props) {
  return (
    <div className={styles.task}>
        <h2>{props.tache.completed ? <del>{props.tache.descr}</del>:props.tache.descr}</h2>
        <button onClick={props.terminerOnClick} disabled={props.tache.completed}><FontAwesomeIcon icon={faCheckCircle}/> </button>
        <button onClick={props.encoursOnClick} disabled={!props.tache.completed}><FontAwesomeIcon icon={faTruckLoading}/></button>
        <button onClick={props.deleteOnClick}><FontAwesomeIcon icon={faTrashCan}/></button>
    </div>
  )
}
