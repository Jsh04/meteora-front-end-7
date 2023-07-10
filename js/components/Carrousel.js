
export default {
    name: "Carrousel",
    template: `
    <div v-for="(imagem, index) in listaDeImagens" :key="index">
        <img :src="imagem.url" :alt="imagem.alt">
    </div>
    `,
    data() {
        return {
            listaDeImagens: [
                {
                    url: "../../assets/Desktop/Banner-carousel-1_1440(1).png",
                    alt: "Modelo usando uma jaqueta rosa"
                }
            ]
        }
    },
};