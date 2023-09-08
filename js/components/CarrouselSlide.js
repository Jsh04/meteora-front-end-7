export default {
    props: ['visibleSlide', 'index', 'slideDirection '],
    template: /*html*/`
        <transition :name="dir" mode="in-out">
            <div v-show="visibleSlide === index" class="carousel-slide"> 
                <slot></slot>
            </div>
        </transition>
    `,
    name:"CarrouselSlide",
    computed:{
        dir(){
            return this.$parent.$parent.slideDirection;
        }
    }
}