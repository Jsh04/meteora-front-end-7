import CarrouselContainer from "./CarrouselContainer.js";
import CarrouselSlide from "./CarrouselSlide.js";
export default {
    name: "Carrousel",
    template: /*template*/ `
    <div class="carousel__container">
        <CarrouselContainer>
            <CarrouselSlide v-for="(slide, index) in slides" :key="slide" :index="index" :visibleSlide="visibleSlide" :slideDirection="slideDirection" class="carousel-slider">
                <img class="carousel__imagens" :src="slide.url" :alt="slide.alt" >
            </CarrouselSlide>
            <span @click="next" id="prox">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 18" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.05381 17.897C1.18521 17.9654 1.32831 17.9996 1.47141 17.9996C1.65141 17.9996 1.82961 17.9456 1.98351 17.8394L13.6835 9.73941C13.9265 9.57111 14.0714 9.29481 14.0714 8.99961C14.0714 8.70441 13.9265 8.42811 13.6835 8.25981L1.98351 0.159806C1.70901 -0.0300944 1.34991 -0.0525944 1.05381 0.102206C0.756811 0.257906 0.571411 0.564806 0.571411 0.899606L0.571411 17.0996C0.571411 17.4344 0.756811 17.7413 1.05381 17.897Z" fill="white"/>
            </svg>
            </span>
            <span @click="prev"   id="ant">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="19" viewBox="0 0 14 19" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2466 1.05026C13.1152 0.981861 12.9721 0.94766 12.829 0.94766C12.649 0.94766 12.4708 1.00166 12.3169 1.10786L0.616903 9.20786C0.373903 9.37616 0.229004 9.65246 0.229004 9.94766C0.229004 10.2429 0.373903 10.5192 0.616903 10.6875L12.3169 18.7875C12.5914 18.9774 12.9505 18.9999 13.2466 18.8451C13.5436 18.6894 13.729 18.3825 13.729 18.0477L13.729 1.84766C13.729 1.51286 13.5436 1.20596 13.2466 1.05026Z" fill="white"/>
                </svg>
            </span>
            <div v-if="widthTablet" class="carousel__menu-tablet">
                <ul>
                    <li @click="indiceAtual(0)" :class="[visibleSlide == 0 ? 'carousel__menu-tablet-item' : 'carousel__menu-tablet-item-desactive']" ></li>
                    <li @click="indiceAtual(1)" :class="[visibleSlide == 1 ? 'carousel__menu-tablet-item' : 'carousel__menu-tablet-item-desactive']"></li>
                    <li @click="indiceAtual(2)" :class="[visibleSlide == 2 ? 'carousel__menu-tablet-item' : 'carousel__menu-tablet-item-desactive']"></li>
                </ul>
            </div>
            
        </CarrouselContainer>
    </div>
    `,
    components: { CarrouselSlide, CarrouselContainer },
    
    data() {
        return {
            slides: [
                {
                    url: "/assets/Desktop/Banner-carousel1_1440(1).png",
                    alt: "Modelo usando uma jaqueta rosa"
                },
                {
                    url: "/assets/Desktop/Banner-carousel-2_1440(1).png",
                    alt: "Modelo usando óculos preto e jaqueta preta"
                },
                {
                    url: "/assets/Desktop/Banner-carousel-3_1440(1).png",
                    alt: "Modelo usando óculos preto e jaqueta branca"
                }
            ],
            visibleSlide: 0,
            indexSlide : 0,
            slideDirection: '',
            widthTablet: false
        }
    },
    computed: {
        slidesLength() {
            return this.slides.length;
        },
    },
    methods: {
        next(){
            this.visibleSlide++;
            if(this.visibleSlide >= this.slidesLength){
                this.visibleSlide = 0;
            }
            this.slideDirection = 'slide-right';
        },
        prev(){
            this.visibleSlide--;
            if(this.visibleSlide < 0){
                this.visibleSlide = this.slidesLength - 1;
            }
            this.slideDirection = 'slide-left';
        },
        indiceAtual(index){
            this.visibleSlide = index
        },

        redimencionamentoDeTela(){
            const $this = this
            window.onresize = function(){
                if(window.innerWidth < 768){
                    $this.widthTablet = true
                }else
                    $this.widthTablet = false
            }
        }
    },
    mounted() {
        this.redimencionamentoDeTela()
    },
};
