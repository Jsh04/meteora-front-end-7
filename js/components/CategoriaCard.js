export default {
    template: /*template*/ `
        <article class="card">
            <img class="card__imagem" :src="imagem" >
            <div class="card__descricao">
                <p class="card__texto ff-inter">{{titulo}}</p>
            <div>
        </article>
    `,
    props:{
        imagem:{
            type: String,
        },
        titulo:{
            type: String,
            default: ""
        }
    }
}