import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Empresa from "../modelo/empresa"
import Produto from "../modelo/produto";
import servico from "../modelo/servico";
import Servico from "../modelo/servico";
import AtualizarProduto from "../negocio/atualizarProduto";
import AtualizarServico from "../negocio/atualizarServico";
import BuscadorCPF from "../negocio/buscadorCPF";
import BuscadorID from "../negocio/buscadorID";
import BuscadorIDProduto from "../negocio/buscadorIDProduto";
import Cadastro from "../negocio/cadastro";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroProduto from "../negocio/cadastroProduto";
import CadastroServico from "../negocio/cadastroServiços";
import ClientesQueMaisConsumiram from "../negocio/clientesQueMaisConsumiram";
import ClientesQueMaisGastaram from "../negocio/clientesQueMaisGastaram";
import DeletarCliente from "../negocio/deletarCLiente";
import DeletarProduto from "../negocio/deletarProduto";
import DeletarServico from "../negocio/deletarServiço";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemClientesGenero from "../negocio/listagemClientesGenero";
import ListagemProduto from "../negocio/listagemProdutos";
import ListagemServico from "../negocio/listagemServiços";


console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()

let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Listar todos os clientes por gênero`);
    console.log(`4-  Cadastrar um serviço`);
    console.log(`5-  Contratar um serviço`);
    console.log(`6-  listar todos serviços`);
    console.log(`7-  atualizar um serviço`);
    console.log(`8-  deletar um serviço`);
    console.log(`9-  Cadastrar um produto`);
    console.log(`10- listar todos produto`);
    console.log(`11- atualizar um produto`);
    console.log(`12- Comprar um produto`);
    console.log(`13- deletar um produto`);
    console.log(`14- deletar um cliente`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            let clienteConsumidores = new ClientesQueMaisConsumiram(empresa.getClientes)
            let clientesGastadores = new ClientesQueMaisGastaram(empresa.getClientes)
            listagem.listar()
            clienteConsumidores.mostrarMaioresConsumidores()
            clienteConsumidores.mostrarMaioresConsumidoresServiços
            clientesGastadores.maioresGastos()
            break;
        case 3:
            let listagemGenero = new ListagemClientesGenero(empresa.getClientes)
            listagemGenero.listar()
            break;
        case 4:
            let cadastroServico = new CadastroServico(empresa.getServicos)
            cadastroServico.cadastrar()
            break;
        case 5:
            let digitarCpf = entrada.receberTexto(`Por favor digite seu CPF: `)
            let buscador = new BuscadorCPF(empresa.getClientes, digitarCpf)
            let clienteAlvo = buscador.buscarClienteCPF()
            console.log(clienteAlvo?.nome)
            let listagemServico = new ListagemServico(empresa.getServicos)
            listagemServico.listar()
            let digitarId = entrada.receberNumero(`${clienteAlvo?.nome}, qual servico voçê deseja contratar: `)
            let buscarid = new BuscadorID(empresa.getServicos, digitarId)
            let servicoAlvo = buscarid.buscarServicoID() as Servico

            clienteAlvo?.getServicosConsumidos.push(servicoAlvo)


            console.log(`voce deseja contratar o serviço de ${servicoAlvo?.tipo} `)
            break;
        case 6:
            listagemServico = new ListagemServico(empresa.getServicos)
            listagemServico.listar()
            break;
        case 7:
            digitarId = entrada.receberNumero(`qual servico voçê deseja alterar: `)
            buscarid = new BuscadorID(empresa.getServicos, digitarId)
            servicoAlvo = buscarid.buscarServicoID() as Servico
            let atualizar = new AtualizarServico(servicoAlvo)
            atualizar.atualizarPreco()
            listagemServico = new ListagemServico(empresa.getServicos)
            listagemServico.listar()
            break;
        case 8:
            digitarId = entrada.receberNumero(`qual servico voçê deseja deletar: `)
            buscarid = new BuscadorID(empresa.getServicos, digitarId)
            servicoAlvo = buscarid.buscarServicoID() as Servico
            let deletar = new DeletarServico(empresa, servicoAlvo)
            deletar.excluirServico()
            console.log(`você deletou o serviço de ${servicoAlvo.tipo}`)
            listagemServico = new ListagemServico(empresa.getServicos)
            listagemServico.listar()
            break;
        case 9:
            let cadastroProduto = new CadastroProduto(empresa.getProdutos)
            cadastroProduto.cadastrar()
            break;
        case 10:
            let listagemProduto = new ListagemProduto(empresa.getProdutos)
            listagemProduto.listar()
            break;
        case 11:
            digitarId = entrada.receberNumero(`qual produto voçê deseja alterar: `)
            let buscadorIDProduto = new BuscadorIDProduto(empresa.getProdutos, digitarId)
            let produtoAlvo = buscadorIDProduto.buscarProdutoID() as Produto
            let atualizarProduto = new AtualizarProduto(produtoAlvo)
            atualizarProduto.atualizarPreco()
            listagemProduto = new ListagemProduto(empresa.getProdutos)
            listagemProduto.listar()
            break;
        case 12:
            digitarCpf = entrada.receberTexto(`Por favor digite seu CPF: `)
            buscador = new BuscadorCPF(empresa.getClientes, digitarCpf)
            clienteAlvo = buscador.buscarClienteCPF()
            console.log(clienteAlvo?.nome)
            listagemProduto = new ListagemProduto(empresa.getProdutos)
            listagemProduto.listar()
            digitarId = entrada.receberNumero(`${clienteAlvo?.nome}, qual produto voçê deseja contratar: `)
            buscadorIDProduto = new BuscadorIDProduto(empresa.getProdutos, digitarId)
            produtoAlvo = buscadorIDProduto.buscarProdutoID() as Produto
            
            clienteAlvo?.getProdutosConsumidos.push(produtoAlvo)

            console.log(`voce deseja contratar o serviço de ${produtoAlvo?.nome} `)
            break;
        case 13:
            digitarId = entrada.receberNumero(`qual produto voçê deseja deletar: `)
            buscadorIDProduto = new BuscadorIDProduto(empresa.getProdutos, digitarId)
            produtoAlvo = buscadorIDProduto.buscarProdutoID() as Produto
            let deletarProduto = new DeletarProduto(empresa, produtoAlvo)
            deletarProduto.excluirProduto()
            console.log(`você deletou o serviço de ${produtoAlvo.nome}`)
            listagemProduto = new ListagemProduto(empresa.getProdutos)
            listagemProduto.listar()
            break;
        case 14:
            digitarCpf = entrada.receberTexto(`Por favor digite o CPF do cliente: `)
            buscador = new BuscadorCPF(empresa.getClientes, digitarCpf)
            clienteAlvo = buscador.buscarClienteCPF() as Cliente
            console.log(clienteAlvo?.nome)
            let deletarCliente = new DeletarCliente(empresa, clienteAlvo)
            deletarCliente.excluirCliente()
            console.log(`você deletou o cliente: ${clienteAlvo.nome}`)
            listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}