
export default {
    name: "Carrousel",
    template: `
    <div class="carousel__container" v-for="(imagem, index) in listaDeImagens" :key="index">
        <img class="carousel__imagens" :src="imagem.url" :alt="imagem.alt" >
    </div>
    `,
    data() {
        return {
            listaDeImagens: [
                {
                    url: "/assets/Desktop/Banner-carousel1_1440(1).png",
                    alt: "Modelo usando uma jaqueta rosa"
                }
            ]
        }
    },
};