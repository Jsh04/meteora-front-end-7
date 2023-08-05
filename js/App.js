import Cabecalho from "./components/Cabecalho.js";
import Carrousel from "./components/Carrousel.js";
import Categoria from "./components/Categoria.js";
import Produto from "./components/Produto.js";



const app = Vue.createApp({
    components: {Cabecalho, Carrousel, Categoria, Produto},
    template: /*template*/ `
    <Cabecalho />
    <Carrousel />
    <main class="principal">
        <Categoria />
        <Produto />
    </main>
    
    `
});

app.mount("#app")

