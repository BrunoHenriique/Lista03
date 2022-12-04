import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class DeletarCliente {
    private empresa: Empresa
    private cliente: Cliente
    constructor(empresa: Empresa, cliente: Cliente) {
        this.empresa = empresa
        this.cliente = cliente
    }

    public excluirCliente() {
        let indice = this.empresa.getClientes.indexOf(this.cliente)
        this.empresa.getClientes.splice(indice, 1)
    }

}