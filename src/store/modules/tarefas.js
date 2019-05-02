export default {
    namespaced: true,
    state: {
        tarefas: [
            {
              id: 0,
              descricao: "Tarefa 1",
              finalizada: false
            },
            {
              id: 1,
              descricao: "Tarefa 2",
              finalizada: true
            }
        ]
    },
    getters: {
        getTarefas: state => state.tarefas
    },
    mutations: {
      ADD_TAREFA (state, tarefa) {
        state.tarefas.push(tarefa)
      },
      DEL_TAREFA (state, tarefa) {
        state.tarefas = state.tarefas.filter( el => el.id !== tarefa.id )
      },
      UPD_TAREFA (state, tarefa) {
        tarefa.finalizada = !tarefa.finalizada
      },
    },
    actions: {
      addTarefa ({ commit }, tarefa) {
        commit('ADD_TAREFA', tarefa)
      },
      delTarefa ({commit}, tarefa) {
        commit('DEL_TAREFA', tarefa)
      },
      atualizaTarefa ({commit}, tarefa) {
        commit('UPD_TAREFA', tarefa)
      }
    }
}