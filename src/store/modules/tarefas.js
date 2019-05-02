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
      }
    },
    actions: {
      addTarefa ({ commit }, tarefa) {
        commit('ADD_TAREFA', tarefa)
      }
    }
}