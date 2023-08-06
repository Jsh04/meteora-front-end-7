import Cabecalho from "./components/Cabecalho.js";
import Carrousel from "./components/Carrousel.js";
import Categoria from "./components/Categoria.js";
import Informacao from "./components/Informacao.js";
import Produto from "./components/Produto.js";
import PromocoesEmail from "./components/PromocoesEmail.js";



const app = Vue.createApp({
    components: {Cabecalho, Carrousel, Categoria, Produto, Informacao, PromocoesEmail},
    template: /*template*/ `
    <Cabecalho />
    <Carrousel />
    <main>
        <div class="container">
            <Categoria />
            <Produto />
        </div>
        <Informacao />
        <PromocoesEmail /> 
    </main>
    
    `
});

app.mount("#app")

