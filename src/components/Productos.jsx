import React, { Component } from 'react'
import { productos } from './Producto'

class Productos extends Component {
  render() {
    return <div>
      {productos.map((productos, key) => {

        return (
          <li>
            <button>{productos.title} </button>
          </li>
        )
      })}
    </div>
  }
}

export default Productos
