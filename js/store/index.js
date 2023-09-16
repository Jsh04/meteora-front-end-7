import { CADASTRAR_EMAIL, PEGAR_LISTA_PRODUTO_API } from "../Constantes/Actions.js"
import { PEGAR_LISTA_PRODUTOS } from "../Constantes/Mutations.js"
import { HttpClient } from "../http/HttpClient.js"

export const key = Symbol()
export const store = Vuex.createStore({
    state:{
        listaProdutos: []
    },
    mutations: {
        [PEGAR_LISTA_PRODUTOS](state, listaProdutosApi){
            state.listaProdutos = listaProdutosApi
        }
    }
    ,
    actions: {
        async [PEGAR_LISTA_PRODUTO_API](context){
            const dados = await HttpClient.get('/produtos')
            return context.commit(PEGAR_LISTA_PRODUTOS, dados.data)
        },
        async [CADASTRAR_EMAIL](context, email){
            const response = await HttpClient.post(`/email`, email)
            console.log(response);
        }
    }
})

export function usarStore(){
    return Vuex.useStore(key)
}