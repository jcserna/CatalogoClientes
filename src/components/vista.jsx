import React, { Component } from "react";
import './estilos/style.css'
import { SidebarData } from "./sidebarData"
import Clientes from "./Clientes"
import Productos from "./Productos"
import Contacto from "./Contactos";




class Vista extends Component {

    constructor(props) {
        super(props)
        this.state = {
            elementos: ["elemento1"],
            texto: 'Proyecto1'
        }
    }


    render() {
        //   const { clientes } = this.state.elementos
        const { elementos } = this.state
        return <>
            <div class="barrasup">
                <img className="barrasup__logo" src="react.png"></img>
                <h1 className="barrasup_texto">{this.state.texto}</h1>
                <div className="sidebar">
                    <ul className="sidebar__list">
                        {SidebarData.map((val, key) => {

                            return (
                                <li>
                                    <button className="sidebar__list--element" onClick={() => { this.setState({ texto: val.title }) }}>{val.title} </button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className="lista">
                {this.state.texto === 'Clientes' ? elementos.map((t, i) => (
                    <Clientes
                        key={i}
                        elementos={t}
                    />)) : null }
            </div>
            <div className="lista">
                {this.state.texto === 'Productos' ? elementos.map((t, i) => (
                    <Productos
                        key={i}
                        elementos={t}
                    />)) : null}
            </div>
            <div className="lista">
                {this.state.texto === 'Contacto' ? elementos.map((t, i) => (
                    <Contacto
                        key={i}
                        elementos={t}
                    />)) : null}
            </div>




        </>
    }

}




export default Vista
