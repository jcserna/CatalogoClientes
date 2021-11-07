import React, { Component } from 'react'
import { contacto } from './Contacto'

class Contacto extends Component {
  render() {
    return <div>
      {contacto.map((contacto, key) => {

        return (
          <li>
            <button>{contacto.title} </button>
          </li>
        )
      })}
    </div>
  }
}

export default Contacto
