import React from 'react'
import styles from './deletetasks.module.css'

export default function DeleteTasks(props) {
  return (
    <div className={styles.delete}>
        <button onClick={props.deleteAll} disabled={props.taches.length===0}>Supprimer tous</button>
        <button onClick={props.deleteTermine} disabled={props.taches.filter(item=> item.completed).length===0}>Supprimer terminer</button>
    </div>
  )
}
