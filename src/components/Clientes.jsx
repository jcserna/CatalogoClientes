import React, { Component } from 'react'
import { clientes } from './Cliente'

class Clientes extends Component {
  render() {
    return <div>
      {clientes.map((clientes, key) => {

        return (
          <li>
            <button>{clientes.title} </button>
          </li>
        )
      })}
    </div>
  }
}

export default Clientes
