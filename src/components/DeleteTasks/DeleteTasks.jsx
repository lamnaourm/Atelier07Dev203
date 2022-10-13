import React from 'react'
import styles from './deletetasks.module.css'

export default function DeleteTasks(props) {
  return (
    <div className={styles.delete}>
        <button onClick={props.deleteAll}>Supprimer tous</button>
        <button onClick={props.deleteTermine}>Supprimer terminer</button>
    </div>
  )
}
