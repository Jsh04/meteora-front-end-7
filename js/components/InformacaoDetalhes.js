export default {
    template: /* template */ `
    <article class="informacao-detalhes">
        <img class="informacao-detalhes__imagem" :src="imagem" :alt="descricaoImagem">
        <div class="informacao-detalhes__container">
            <h5 class="informacao-detalhes__titulo ff-inter">{{formatarTitulo()}}</h5>
            <p class="informacao-detalhes__descricao ff-inter">{{descricao}}</p>
        </div>
    </article>
    `,
    name:"InformacaoDetalhes",
    props: ['imagem','descricao', 'titulo', 'descricaoImagem'],
    methods: {
        formatarTitulo(){
            return this.titulo.toUpperCase()
        }
    },
}