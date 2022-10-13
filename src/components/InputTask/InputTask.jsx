import React from 'react'

export default function InputTask(props) {
  return (
    <div>
        <input type="text" name="des" id="des" value={props.description} onChange={props.onChangeDesc} />
        <button onClick={props.onAddClick}>Ajouter</button>
    </div>
  )
}
