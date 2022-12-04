import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Listagem from "./listagem";

export default class AtualizarServico {
    private servico: Servico
    constructor(servico: Servico) {
        this.servico = servico
    }

    public atualizarPreco(){
        let entrada = new Entrada()
        let novoPreco = entrada.receberNumero(`Qual sera o novo preço do serviço: `)
        this.servico.valor = novoPreco
    }

}