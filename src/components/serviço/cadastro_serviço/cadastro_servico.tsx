import React from 'react'
import NavBar from '../../navbar/navbar'

const CadastroServico = () => {
  return (
    <>
    <NavBar />
    <div className="content">
        <div id="cadastro">
          <form method="post" action="">
            <h1>Cadastro de Serviço</h1>
            <p>
              <label className="nome_cad">Nome</label>
              <input id="nome" name="nome" type="text" placeholder="vitão" />
            </p>

            <p>
              <label className="email_cad">Valor</label>
              <input id="valor_produto" name="Valor_produto" type="valor" placeholder="20$" />
            </p>

            <p>
              <label className="email_cad">Id produto </label>
              <input id="Id_produto" name="Id_produto" type="Id_produto" placeholder="id: 4734" />
            </p>

            <p>
              <input type="submit" value="Cadastrar" />
            </p>
            <p className="link">
              <a href="/"> Ir para Home </a>
            </p>
          </form>
        </div>
      </div>
      </>
  )
}

export default CadastroServico