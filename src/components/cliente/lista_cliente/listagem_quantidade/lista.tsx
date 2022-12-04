import React from 'react'

const ListaQuantidade = () => {
    return (
        <main>
            <div className='title'>
                <h2>Listagem de Clientes</h2>
                <p>que mais consumiram em quantidade</p>
            </div>
            <div className='table-wrapper'>

                <table className='fl-table'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Número</th>
                            <th>Genero</th>
                            <th>Produto</th>
                            <th>Valor</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Bruno</td>
                            <td>1</td>
                            <td>masculino</td>
                            <td>Gel de cabelo</td>
                            <td>12</td>
                            <td>
                                <button className='editar'><a href='/editar_cliente'>Editar</a></button>
                                <button className='excluir'>Excluir</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Vitao</td>
                            <td>2</td>
                            <td>masculino</td>
                            <td>shampoo do cr7</td>
                            <td>15</td>
                            <td>
                                <button className='editar'><a href='/editar_cliente'>Editar</a></button>
                                <button className='excluir'>Excluir</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default ListaQuantidade