import ProdutoCard from "./ProdutoCard.js"


export default {
    template: /*template*/`
        <section class="produto">
            <div class="produto__titulo">
                <h2 class="produto__titulo-texto ff-inter">Produtos que estão bombando!</h2>
            </div>
            <div class="produtos__cards">
                <ProdutoCard v-for="(produto, index) in listaDeProdutos" :key="index" :imagem="produto.imagem" :titulo="produto.titulo" :descricao="produto.descricao" :preco="produto.preco"/>
            </div>

        </section>
    
    `,
    components: { ProdutoCard },
    data() {
        return {
            listaDeProdutos: [
                {
                    imagem: "/assets/Desktop/Imagens-Cards/Camiseta.png",
                    titulo: "Camiseta Conforto",
                    descricao: 'Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex.',
                    preco: 70 
                },
                {
                    imagem: "/assets/Desktop/Imagens-Cards/Calca.png",
                    titulo: "Calça Alfaiataria",
                    descricao: 'Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!',
                    preco: 180 
                },
                {
                    imagem: "/assets/Desktop/Imagens-Cards/Tenis.png",
                    titulo: "Tênis Chunky",
                    descricao: 'Snicker casual com solado mais alto e modelagem robusta. Modelo unissex.',
                    preco: 250
                },
                {
                    imagem: "/assets/Desktop/Imagens-Cards/Jaqueta.png",
                    titulo: "Jaqueta Jeans",
                    descricao: 'Modelo unissex oversized com gola de camurça. Atemporal e autêntica!',
                    preco: 150 
                },
                {
                    imagem: "/assets/Desktop/Imagens-Cards/oculos.png",
                    titulo: "Óculos Redondo",
                    descricao: 'Armação metálica em grafite com lentes arredondadas. Sem erro!',
                    preco: 120 
                },
                {
                    imagem: "/assets/Desktop/Imagens-Cards/Bolsa.png",
                    titulo: "Bolsa coringa",
                    descricao: 'Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!',
                    preco: 120 
                },
                
            ]
        }
    },
}