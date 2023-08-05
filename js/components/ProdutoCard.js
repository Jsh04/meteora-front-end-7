export default {
    template: /*template*/`
    <article class="card-produto">
        <img class="card-produto__imagem" :src="imagem" :alt="descricao">
        <div class="card-produto__container">
            <h4 class="card-produto__titulo-texto ff-inter">{{titulo}}</h4>
            <div class="card-produto__descricao-container">
                <p class="card-produto__descricao ff-inter">{{descricao}}</p>
                <p class="card-produto__preco ff-inter">R$ {{formatarPreco(preco)}}</p>
            </div>
            
            <div class="card-produto__botao">
                <button class="card-produto__botao-ver-mais ff-inter">Ver mais</button>
            </div>
        </div> 
    </article>
    
    
    `,
    name: "ProdutoCard",
    props: ['imagem', 'descricao', 'titulo', 'preco'],
    methods: {
        formatarPreco(preco){
            const precoFormatado = preco.toFixed(2).toString().replace(".", ",")
            return precoFormatado;
        }
    },
}