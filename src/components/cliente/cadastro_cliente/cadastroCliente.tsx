import React from 'react'
import './style.css'

const CadastroCliente = () => {
  return (
      <div className="content">
        <div id="cadastro">
          <form method="post" action="">
            <h1>Cadastro</h1>

            <p>
              <label className="nome_cad">Seu nome</label>
              <input id="nome_cad" name="nome_cad" type="text" placeholder="vitão" />
            </p>

            <p>
              <label className="email_cad">Seu e-mail</label>
              <input id="email_cad" name="email_cad" type="email" placeholder="ian@gmail.com" />
            </p>

            <p>
              <label className="email_cad">Seu número </label>
              <input id="email_cad" name="email_cad" type="email" placeholder="55+ (12) 9849494395" />
            </p>

            <p>
              <label className="email_cad">Seu Genero</label>
              <input id="email_cad" name="email_cad" type="email" placeholder="seu genero" />
            </p>

            <p>
              <label className="senha_cad">Sua senha</label>
              <input id="senha_cad" name="senha_cad" type="password" placeholder="1234" />
            </p>
            <p>
              <label className="senha_cad">Seu CPF</label>
              <input id="senha_cad" name="senha_cad" type="password" placeholder="1234" />
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
  )
}

export default CadastroCliente