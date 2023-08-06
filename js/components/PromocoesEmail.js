export default {
    template: /* template */ ` 
    <section class="promocoes">
        <article class="promocoes__container">
        <div class="promocoes__titulo">
            <h5 class="promocoes__titulo-texto ff-inter">Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? Cadastre-se!</h5>
        </div>
        <div class="promocoes__corpo">
            <input type="email" id="email" name="email" v-model="email" placeholder="Digite seu email" class="promocoes__corpo-campo">
            <button class="promocoes__corpo-botao ff-inter" type="submit">Enviar</button>
        </div>
        </article>
    </section>
    
    `,
    name:"EmailPromocoes",
    data() {
        return {
            email: ''
        }
    },
}