export default {
    template:/*template*/`
    <header class="cabecalho">
        <div class="cabecalho__sections-links">
            <div><img src="/assets/Desktop/Logo-desktop.png"></div>
            <ul class="cabecalho__lista">
                <li class="cabecalho__item">Home</li>
                <li class="cabecalho__item">Nossas Lojas</li>
                <li class="cabecalho__item">Novidades</li>
                <li class="cabecalho__item">Promoções</li>
            </ul>
        </div>
        <div class="cabecalho__btn-mobile">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.571289H18V2.82129H0V0.571289ZM0 6.19629H18V8.44629H0V6.19629ZM0 11.8213H18V14.0713H0V11.8213Z" fill="#DAFF01"/>
            </svg>
        </div>
        <div class="cabecalho__section-busca">
            <input type="text" v-model="filtro" id="search" name="search" placeholder="Digite um produto" class="cabecalho__input-busca">
            <button class="cabecalho__button-busca" @click="enviarFiltro()" type="submit">Buscar</button>
        </div>
    </header>
    `,

    name: "Cabecalho",
    data() {
        return {
            filtro: '',
            isWidthMobilt: false
        }
    },
    methods: {
        enviarFiltro(){
            console.log("Apertou no botão")
            console.log(this.filtro)
        },
        redimensionamentoTelaMobile(){

        }
    },
    mounted(){
        console.log(window.innerWidth);
    }
}



