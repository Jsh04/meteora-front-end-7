export default {

    template: /*html*/`

        <div :style="isActiveModal" class="email-confirmado">
            <div class="email-confirmado__cabecalho">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                    <path d="M16 30.5C8.26801 30.5 2 24.232 2 16.5C2 8.76801 8.26801 2.5 16 2.5C23.732 2.5 30 8.76801 30 16.5C30 24.232 23.732 30.5 16 30.5ZM16 32.5C24.8366 32.5 32 25.3366 32 16.5C32 7.66344 24.8366 0.5 16 0.5C7.16344 0.5 0 7.66344 0 16.5C0 25.3366 7.16344 32.5 16 32.5Z" fill="#DAFF01"/>
                    <path d="M21.9393 10.4393C21.9252 10.4535 21.9119 10.4685 21.8995 10.4842L14.9548 19.3335L10.7678 15.1464C10.182 14.5607 9.23222 14.5607 8.64643 15.1464C8.06065 15.7322 8.06065 16.682 8.64643 17.2678L13.9393 22.5607C14.5251 23.1464 15.4749 23.1464 16.0606 22.5607C16.0737 22.5476 16.086 22.5339 16.0975 22.5195L24.0819 12.5389C24.6463 11.9516 24.6392 11.0179 24.0606 10.4393C23.4749 9.85355 22.5251 9.85355 21.9393 10.4393Z" fill="#DAFF01"/>
                </svg>
                <h2 class="detalhes__cabecalho-titulo ff-inter">E-mail cadastrado com sucesso! </h2>
                <span @click="fecharModalEmailConfirmado($event)"  style="cursor: pointer;">X</span>
            </div>
            <div class="email-confirmado__corpo">
                <p>Em breve você receberá novidades exclusivas da Meteora.</p>
            </div>
        </div>
    `,
    props: ['activeModal'],
    computed: {
        isActiveModal(){
            if(this.activeModal){
                const modal = document.querySelector(".email-confirmado");
                if(modal.style.display == 'none')
                    modal.style.display = 'block'
                return { transform: 'translateY(0px)' }
            }else{
                return { transform: 'translateY(-500px)' }
            }
        }
        
    },
    methods: {
        fecharModalEmailConfirmado(e){
            const modalEmailConfimado = e.target.parentNode.parentNode;
            modalEmailConfimado.style.display = 'none'
            this.$emit("fechar-modal", this.isActiveModal)
        }
    },



}