import $http from '@/axios.js'

export default {
    namespaced: true,
    state: {
        tarefas: [],
        carregando: false
    },
    getters: {
        getTarefas: state => state.tarefas,
        getCarregando: state => state.carregando
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
      SET_TAREFAS (state, tarefas) {
        state.tarefas = tarefas
      },
      SET_CARREGANDO (state, carregando) {
        state.carregando = carregando
      }
    },
    actions: {
      addTarefa ({ commit }, tarefa) {
        commit('ADD_TAREFA', tarefa)
        // Aqui seria POST, mas para "forçar" (no Firebase) o uuid criado no APP, estou usando PUT
        $http.put(`/tasks/${tarefa.id}.json`, tarefa)
      },
      delTarefa ({ commit }, tarefa) {
        commit('DEL_TAREFA', tarefa)
        $http.delete(`/tasks/${tarefa.id}.json`, tarefa)
      },
      atualizaTarefa ({ commit }, tarefa) {
        commit('UPD_TAREFA', tarefa)
        $http.put(`/tasks/${tarefa.id}.json`, tarefa)
      },
      loadTarefas ({ commit }) {
        commit('SET_CARREGANDO', true)
        $http('/tasks.json').then(response => {
          commit('SET_CARREGANDO', false)
          if(!response.data) return
          commit('SET_TAREFAS', Object.values(response.data))
        })
      }
    }
}