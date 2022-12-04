import React from 'react'
import NavBar from '../../navbar/navbar'
import ListaQuantidade from './listagem_quantidade/lista'
import ListaGenero from './listagem_genero/lista'
import ListaMenorQuantidade from './listagem_menor_qtd/lista'
import ListaValor from './listagem_valor/lista'
import './style.css'

const ListaCliente = () => {
    return (
        <>
        <NavBar />
        <ListaQuantidade />
        <ListaGenero />
        <ListaMenorQuantidade />
        <ListaValor />
        </>
    )
}

export default ListaCliente