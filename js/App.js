import Cabecalho from "./components/Cabecalho.js";
import Carrousel from "./components/Carrousel.js";

const app = Vue.createApp({
    components: {Cabecalho, Carrousel},
    template: `
    <Cabecalho />
    <Carrousel />
    `
});

app.mount("#app")

