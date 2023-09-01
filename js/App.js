import Cabecalho from "./components/Cabecalho.js";
import Carrousel from "./components/Carrousel.js";
import Categoria from "./components/Categoria.js";
import DetalheProduto from "./components/DetalheProduto.js";
import Informacao from "./components/Informacao.js";
import Produto from "./components/Produto.js";
import PromocoesEmail from "./components/PromocoesEmail.js";
import Rodape from "./components/Rodape.js";

const app = Vue.createApp({
    components: {Cabecalho, Carrousel, Categoria, Produto, Informacao, PromocoesEmail, Rodape,DetalheProduto},
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
    <Rodape />
    <DetalheProduto />
    `
});

app.mount("#app")

