async function connect(){
    if(global.connection && global.connection.state !== "disconnected")
    return global.connection;
  
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:fatec@localhost:3306/wb");
    global.connection = connection;
    return connection;
  }
  
  /*    insert Cliente */
  async function insert_cli(nome,cpf, nome_social, data_nas,genero){
    const con = await connect();
    con.query(`insert into cliente(nome,nome_social,cpf,data_nas,genero)
    values ('${nome}','${nome_social}','${cpf}','${data_nas}','${genero}',);`)
    permissao = true
  }

  /* Insert Servico */

  async function insert_serv(nome,cpf, nome_social, data_nas,genero){
    const con = await connect();
    con.query(`insert into servicos(nome,email,cpf,nas_data,tel_fixo,tel_celular,cep,numero,rua,bairro,cidade,estado,complemento)
    values ('${nome}','${nome_social}','${cpf}','${data_nas}','${genero}',);`)
    permissao = true
  }
  
  async function insert_esc(escolas,cpf){
    for (k in escolas){
      const escola = escolas[k].escolas.toUpperCase()
      const con = await connect();
      var [rows] = await con.query(`select esc_cod from escolas where escola like "%${escola}";`)
      rows = rows[0]
  
      if (rows == undefined){
        con.query(`insert into escolas(escola) values ("${escola}");`);
        var [rows] = await con.query(`select esc_cod from escolas where escola like "%${escola}";`)
        rows = rows[0]
      }
      var {esc_cod} = rows
  
      var [rows] = await con.query(`select fun_cod from funcionario where cpf like "%${cpf}";`)
      rows = rows[0]
      var fun_cod = rows.fun_cod
  
      con.query(`insert into emprego(fun_cod,esc_cod) values (${fun_cod},${esc_cod});`);
    }
  }
  
  const { format } = require('date-fns')
  
  async function insert_trechos(dados){
    const today = new Date();
    const formattedDate = format(today, 'dd.MM.yyyy');
    const con = await connect();
  
    for(let k=0; dados.length > k; ++k){
      let dado = dados[k]
  
      var [rows] = await con.query(`select rel_data from relacao where fun_cod like ${dado[1]};`)
      rows = rows[0]
  
      var chave = true
      if(rows != undefined){
        for(let c=0; rows.length > c; ++c){
          if(rows[c]==formattedDate){
            chave = false
          }
        }
      }
  
      
      if(chave){
        con.query(`insert into trechos(trecho) values ('${dado[6]}');`);
  
        var [rows] = await con.query(`select tre_cod from trechos where trecho like '${dado[6]}';`)
        rows = rows[0]
  
         
        con.query(`insert into relacao(rel_data,fun_cod,tre_cod) values ('${formattedDate}',${dado[1]},${rows.tre_cod});`);
      }
    }
  }
  
  const express = require("express");
  const app = express();
  const cors = require("cors");
  const { exec } = require('node:child_process')
  const schedule = require('node-schedule');
  
  
  app.use(express.json());
  app.use(cors());
  
  app.post("/register", (req, res) => {
    const { nome } = req.body;
    const { email } = req.body;
    const { cpf } = req.body;
    var { nas_data } = req.body;
    const { tel_fixo } = req.body;
    const { tel_celular } = req.body;
    const { cep } = req.body;
    const { numero } = req.body;
    const { rua } = req.body;
    const { bairro } = req.body;
    const { cidade } = req.body;
    const { estado } = req.body;
    const { complemento } = req.body;
    const { escolas } = req.body;
  
    const dia = nas_data.substring(0,2)
    const mes = nas_data.substring(3,5)
    const ano = nas_data.substring(6,)
    var nas_data = ano + '-' + mes + '-' + dia
  
    insert_fun(nome,email,cpf,nas_data,tel_fixo,tel_celular,cep,numero,rua,bairro,cidade,estado,complemento)
    insert_esc(escolas,cpf)
  });
  
  app.post('/envio_de_emails', (req, res) => {
    const { info } = req.body
    enviaremail(info)
  
  })
  
  var request = require('request-promise');
  
  async function enviaremail(info) {
    var data = {
        array: info
    }
    var options = {
        method: 'POST',
        uri: 'http://127.0.0.1:5000/envio_email',
        body: data,
        json: true
    }; 
    var sendrequest = await request(options)
        .then(function (parsedBody) {
            result = parsedBody['result'];
            return result
        })
        .catch(function (err) {
            console.log(err);
        });
    return sendrequest
  }
  
  async function associados() {
      var data = {
          array: 1
      }
      var options = {
          method: 'POST',
          uri: 'http://127.0.0.1:5000/associados',
          body: data,
          json: true
      }; 
      var sendrequest = await request(options)
          .then(function (parsedBody) {
              result = parsedBody['result'];
              return result
          })
          .catch(function (err) {
              console.log(err);
          });
      return sendrequest
  }
  
  var permissao = true
  var x = ''
  const job = schedule.scheduleJob('0 0 8 * * 2-6', function(){
    permissao = true
  });
  
  app.get("/pdf_inf", (req, resp) => {
    async function main() {
      if(permissao){
        x = await associados()
        insert_trechos(x)
        permissao = false}
      resp.send(x);
      }
    main()
      
  });
  
  app.listen(3001, () => {
    console.log("rodando na porta 3001");
  });