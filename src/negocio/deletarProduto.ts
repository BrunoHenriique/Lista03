import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import Produto from "../modelo/produto";
import Listagem from "./listagem";

export default class DeletarProduto {
    private empresa: Empresa
    private produto: Produto
    constructor(empresa: Empresa, produto: Produto) {
        this.empresa = empresa
        this.produto = produto
    }

    public excluirProduto() {
        let indice = this.empresa.getProdutos.indexOf(this.produto)
        this.empresa.getProdutos.splice(indice, 1)
    }

}