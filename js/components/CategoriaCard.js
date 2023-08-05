export default {
    template: /*template*/ `
        <article class="card-categoria">
            <img class="card-categoria__imagem" :src="imagem" >
            <div class="card-categoria__descricao">
                <p class="card-categoria__texto ff-inter">{{titulo}}</p>
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