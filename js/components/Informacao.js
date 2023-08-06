import InformacaoDetalhes from "./InformacaoDetalhes.js"

export default {
    template: /*template*/ `
    <section class="informacao">
        <div class="informacao__titulo">
            <h2 class="informacao__titulo-texto ff-inter">Conheça todas as nossas facilidades</h2>
        </div>
        <div class="informacao__detalhes">
        <InformacaoDetalhes v-for="(detalhes, index) in listaDedetalhes" :key="index" :imagem="detalhes.imagem" :titulo="detalhes.titulo" :descricao="detalhes.descricao" :descricaoImagem="detalhes.imagemDescricao"/>
        </div>
        
    </section>
    
    
    `,
    name:"Informacao",
    components: { InformacaoDetalhes },
    data() {
        return {
            listaDedetalhes: [
                {
                    imagem: '/assets/Desktop/Icones/x-diamond-(2).png',
                    imagemDescricao: 'Ícone do Pix',
                    titulo: 'Pague pelo Pix',
                    descricao: 'Ganhe 5% OFF em pagamentos via PIX'
                },
                {
                    imagem: '/assets/Desktop/Icones/arrow-repeat(2).png',
                    imagemDescricao: 'Ícone do para troca grátis',
                    titulo: 'TROCA GRÁTIS',
                    descricao: 'Fique livre para trocar em até 30 dias.'
                },
                {
                    imagem: '/assets/Desktop/Icones/flower1-(3).png',
                    imagemDescricao: 'Ícone de Flor',
                    titulo: 'SUSTENTABILIDADE',
                    descricao: 'Moda responsável, que respeita o meio ambiente.'
                }
            ]
        }
    },

}