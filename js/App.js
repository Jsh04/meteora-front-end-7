import Cabecalho from "./components/Cabecalho.js";

const app = Vue.createApp({
    components: {Cabecalho},
    template: `
    <Cabecalho />
    <main></main>
    `
});

app.mount("#app")

