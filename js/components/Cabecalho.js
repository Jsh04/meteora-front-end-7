export default {
    template: `
    <header class="cabecalho">
        <div class="cabecalho__sections-links">
            <div><img src="../../assets/Desktop/Logo-desktop.png"></div>
            <ul class="cabecalho__lista">
                <li class="cabecalho__item">Home</li>
                <li class="cabecalho__item">Nossas Lojas</li>
                <li class="cabecalho__item">Novidades</li>
                <li class="cabecalho__item">Promoções</li>
            </ul>
        </div>
        <div class="cabecalho__section-busca">
            <input type="text" id="search" name="search" class="cabecalho__input-busca">
            <button class="cabecalho__button-busca" @click="enviarFiltro()" type="submit">Buscar</button>
        </div>
    </header>

    `,

    name: "Cabecalho",
    methods: {
        enviarFiltro(){
            console.log("Apertou no botão")
        }
    },
}