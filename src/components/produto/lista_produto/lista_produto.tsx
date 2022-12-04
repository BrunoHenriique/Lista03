import React from 'react'
import NavBar from '../../navbar/navbar'
import './style.css'

const ListaProduto = () => {
    return (
        <>
            <NavBar />
            <main>
                <div className='title'>
                    <h2>Listagem de Produtos</h2>
                </div>
                <div className='table-wrapper'>

                    <table className='fl-table'>
                        <thead>
                            <tr>
                                <th>Produto</th>
                                <th>ID Produto</th>
                                <th>Quantidade</th>
                                <th>Valor</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Gel de cabelo</td>
                                <td>1</td>
                                <td>1</td>
                                <td>12</td>
                                <td>
                                <button className='editar'><a href='/editar_produto'>Editar</a></button>
                                    <button className='excluir'>Excluir</button>
                                </td>
                            </tr>
                            <tr>
                                <td>shampoo do cr7</td>
                                <td>2</td>
                                <td>1</td>
                                <td>15</td>
                                <td>
                                    <button className='editar'><a href='/editar_produto'>Editar</a></button>
                                    <button className='excluir'>Excluir</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    )
}

export default ListaProduto