import CategoriaCard from "./CategoriaCard.js"
export default {
    
    template:/*template*/ `  
        <section class="categoria">
            <div class="categoria__titulo"><h2 class="categoria__titulo-texto ff-inter ">Busque por categoria:</h2></div>
            <div class="categoria__cards">
            <CategoriaCard v-for="(card, index) in listaDeCategorias" :key="index" :imagem="card.imagem" :titulo="card.titulo" />
            </div>
            
        </section>
    
    
    `,
    data(){
        return{
            listaDeCategorias: [
                {
                    imagem: "/assets/Desktop/Categorias/Categoria-camiseta.png",
                    titulo: "Camisetas"
                },
                {
                    imagem: '/assets/Desktop/Categorias/Categoria-Bolsa.png',
                    titulo: "Bolsas"
                },
                {
                    imagem: '/assets/Desktop/Categorias/Categoria-Calcados.png',
                    titulo: "Calçados"
                },
                {
                    imagem: '/assets/Desktop/Categorias/Categoria-calca.png',
                    titulo: "Calças"
                },
                {
                    imagem: '/assets/Desktop/Categorias/Categoria-casacos.png',
                    titulo: "Casacos"
                },
                {
                    imagem: '/assets/Desktop/Categorias/Categoria-oculos.png',
                    titulo: "Óculos"
                }
            ]
        }
    },
    components:{
        CategoriaCard
    }
}