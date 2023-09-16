import { CADASTRAR_EMAIL } from "../Constantes/Actions.js"
import { usarStore } from "../store/index.js"
import EmailConfirmado from "./EmailConfirmado.js"

export default {
    template: /* template */ ` 
    <section class="promocoes">
        <article class="promocoes__container">
            <div class="promocoes__titulo">
                <h5 class="promocoes__titulo-texto ff-inter">Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? Cadastre-se!</h5>
            </div>
            <div class="promocoes__corpo">
                <input type="email" id="email" name="email" v-model="email" placeholder="Digite seu email" class="promocoes__corpo-campo">
                <button @click="enviarEmail($event)" class="promocoes__corpo-botao ff-inter" type="button">Enviar</button>
            </div>
        </article>
    </section>
    <EmailConfirmado @fechar-modal="fecharModal" :activeModal="activeModal"/>
    
    `,
    name:"EmailPromocoes",
    components: { EmailConfirmado },
    data() {
        return {
            email: '',
            activeModal: false
        }
    },
    methods: {
        async enviarEmail(e){
            e.preventDefault();
            if(this.email == '')
            return
            const res = await this.store.dispatch(CADASTRAR_EMAIL, this.email)
            if(res.status == 201){
                this.activeModal = true
                this.email = ''
            }
            
        },
        fecharModal(activeModal){
            if (activeModal) {
                this.activeModal = false
            }
        }
    },
    setup() {
        const store = usarStore();
        return{
            store
        }
    }
}