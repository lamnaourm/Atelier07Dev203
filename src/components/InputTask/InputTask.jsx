import { faPlusSquare } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function InputTask(props) {
  return (
    <div>
        <input type="text" name="des" id="des" value={props.description} onChange={props.onChangeDesc} />
        <button onClick={props.onAddClick}><FontAwesomeIcon icon={faPlusSquare} /></button>
    </div>
  )
}
