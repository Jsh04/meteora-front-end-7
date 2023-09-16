import { PEGAR_LISTA_PRODUTO_API } from "../Constantes/Actions.js"
import { store, usarStore } from "../store/index.js"
import ProdutoCard from "./ProdutoCard.js"

const { computed }= Vue


export default {
    template: /*template*/`
        <section class="produto">
            <div class="produto__titulo">
                <h2 class="produto__titulo-texto ff-inter">Produtos que estão bombando!</h2>
            </div>
            <div class="produtos__cards">
                <ProdutoCard v-for="(produto, index) in listaDeProdutos" :key="index" :produto="produto"/>
            </div>

        </section>
    
    `,
    components: { ProdutoCard },
    data() {
        return {
            listaDeProdutos: []
        }
    },
    setup(){
        const store = usarStore()
        store.dispatch(PEGAR_LISTA_PRODUTO_API)
        return {
            store,
            listaDeProdutos: computed(() => store.state.listaProdutos)
        }
    }
}