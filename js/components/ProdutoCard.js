import DetalheProduto from "./DetalheProduto.js";
export default {
    template: /*template*/`
    <article class="card-produto">
        <img class="card-produto__imagem" :src="produto.imagem" :alt="descricao">
        <div class="card-produto__container">
            <h4 class="card-produto__titulo-texto ff-inter">{{produto.titulo}}</h4>
            <div class="card-produto__descricao-container">
                <p class="card-produto__descricao ff-inter">{{produto.descricao}}</p>
                <p class="card-produto__preco ff-inter">R$ {{formatarPreco(produto.preco)}}</p>
            </div>
            
            <div class="card-produto__botao">
                <button @click="verDetalhes()" class="card-produto__botao-ver-mais ff-inter">Ver mais</button>
            </div>
        </div> 
    </article>
    <DetalheProduto @fechar-modal-detalhes="fecharModal" :isActiveModal="isActiveModal" :produto="produto" >
    
    `,
    name: "ProdutoCard",
    data() {
        return {
            isActiveModal: false
        }
    },
    components: { DetalheProduto },
    props: {
        produto: {
            type: Object
        }
    },
    methods: {
        formatarPreco(preco){
            const precoFormatado = preco.toFixed(2).toString().replace(".", ",")
            return precoFormatado;
        },
        verDetalhes(){
            if(this.isActiveModal)
                this.isActiveModal = false
            else
                this.isActiveModal = true
        },
        fecharModal(fecharModal){
            this.isActiveModal = fecharModal
        }
    },
}