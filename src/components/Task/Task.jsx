import React from 'react'

export default function Task(props) {
  return (
    <div>
        <h2>{props.tache.completed ? <del>{props.tache.descr}</del>:props.tache.descr}</h2>
        <button onClick={props.terminerOnClick}>Terminer</button>
        <button onClick={props.encoursOnClick}>En cours</button>
        <button onClick={props.deleteOnClick}>Supprimer</button>
    </div>
  )
}
