import Cabecalho from "./components/Cabecalho.js";
import Carrousel from "./components/Carrousel.js";
import Categoria from "./components/Categoria.js";


const app = Vue.createApp({
    components: {Cabecalho, Carrousel, Categoria},
    template: `
    <Cabecalho />
    <Carrousel />
    <Categoria />
    `
});

app.mount("#app")

