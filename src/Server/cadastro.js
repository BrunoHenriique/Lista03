import React, { useState } from "react";
import Axios from "axios";

function Cadastro() {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [emi_cpf, setNasc] = useState(''); /* Emissão de cpf  */
    const [genero, setGenero] = useState(''); /*Genero */
    const [nome_social, setNomeSocial] = useState(''); /** Nome Social */


    let clearAreas = (i, e) => {
      setNome('')
      setCpf('')
      setNasc('')
      setGenero('')
      setNomeSocial('')
    }
  
    function handleSubmit(e) {
      e.preventDefault()
      if (cpf.isValid(cpfe) == true){
      toast.success('Cadastrado feito com sucesso!');
  
      Axios.post("http://localhost:3001/register", {
        nome: nome,
        cpf: cpf,
        emissao_cpf: emi_cpf,
        genero: genero,
        nome_social: nome_social
      }).then((res)=>{
        console.log(res)})}}

    return (
      <div>
      <Header/>
      <div className="container">
  
        <div className='content'>
          <p>Cadastro</p>
  
          <form onSubmit={handleSubmit}>

              <input placeholder='Nome completo' maxLength="60" value={nome} onChange={(e) => setNome(e.target.value)} required />
              <IMaskInput mask="000.000.000-00" placeholder="CPF" value={cpf} onBlur={checkCpf} onChange={(e) => setCpf(e.target.value)} />
              <IMaskInput mask="00/00/0000" placeholder='Data de nascimento' value={emi_cpf} onChange={(e) => setNasc(e.target.value)} />
              <input placeholder='Bairro' value={genero} onChange={(e) => setGenero(e.target.value)} />
              <input placeholder='Cidade' value={nome_social} onChange={(e) => setNomeSocial(e.target.value)} />

          </form>
        </div>
      </div>
      </div>
    );
  }