import React from 'react'

export default function DeleteTasks(props) {
  return (
    <div>
        <button onClick={props.deleteAll}>Supprimer tous</button>
        <button onClick={props.deleteTermine}>Supprimer terminer</button>
    </div>
  )
}
