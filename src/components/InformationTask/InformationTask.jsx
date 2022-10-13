import React from 'react'
import styles from './informationtask.module.css'

export default function InformationTask(props) {
  return (
    <div className={styles.information}>
        <h2>Nombre de taches : {props.taches.length}</h2>
        <h2>Nombre Termine : {props.taches.filter(item => item.completed==true).length}</h2>
        <h2>Nombre En cours: {props.taches.filter(item => item.completed==false).length}</h2>
    </div>
  )
}
