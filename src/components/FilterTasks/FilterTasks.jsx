import React from 'react'
import styles from './filtertasks.module.css'

export default function FilterTasks(props) {
  return (
    <div className={styles.filter}>
        <button onClick={props.All} disabled={props.filter===1}>ALL</button>
        <button onClick={props.Termine} disabled={props.filter===2}>Termines</button>
        <button onClick={props.Encours} disabled={props.filter===3}>En cours</button>
    </div>
  )
}
