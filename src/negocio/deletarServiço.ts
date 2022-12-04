import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import Servico from "../modelo/servico";
import Listagem from "./listagem";

export default class DeletarServico {
    private empresa: Empresa
    private servico: Servico
    constructor(empresa: Empresa, servico: Servico) {
        this.empresa = empresa
        this.servico = servico
    }

    public excluirServico() {
        let indice = this.empresa.getServicos.indexOf(this.servico)
        this.empresa.getServicos.splice(indice, 1)
    }

}