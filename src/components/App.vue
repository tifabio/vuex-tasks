<template>
  <div id="app">
    <div class="container mt-3">
      <div class="input-group">
        <input type="text" class="form-control" v-model="tarefa.descricao" @keyup.enter="addTarefa">
        <span class="input-group-btn">
          <button class="btn btn-info" type="button" @click="addTarefa">Add</button>
        </span>
      </div>
      <hr>
      <button class="btn btn-primary mb-3" type="button" disabled v-if="carregando">
          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          <span class="ml-2">Carregando...</span>
      </button>
      <div class="alert alert-dark" v-if="tarefas.length === 0">
        Nenhuma tarefa cadastrada
      </div>
      <ul class="list-group">
        <li class="list-group-item pointer" v-for="tarefa in tarefas" :key="tarefa.id" @click="atualizaTarefa(tarefa)">
          <span :class="{ finalizado: tarefa.finalizada }">{{ tarefa.descricao }}</span>
          <button class="btn btn-sm btn-danger float-right" @click.stop="delTarefa(tarefa)">Del</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'app',
  data() {
    return {
      tarefa: {
        descricao: ''
      }
    }
  },
  computed: {
    tarefas() {
      return this.$store.getters['tarefas/getTarefas'] 
    },
    carregando() {
      return this.$store.getters['tarefas/getCarregando'] 
    }
  },
  methods: {
    addTarefa() {
      const descricao = this.tarefa.descricao.trim()
      if(!descricao) return
      
      const tarefa = {
        id: Vue.uuid(),
        descricao: descricao,
        finalizada: false
      }

      this.$store.dispatch('tarefas/addTarefa', tarefa)
      this.tarefa.descricao = ''
    },
    delTarefa(tarefa) {
      this.$store.dispatch('tarefas/delTarefa', tarefa)
    },
    atualizaTarefa(tarefa) {
      this.$store.dispatch('tarefas/atualizaTarefa', tarefa)
    }
  },
  created() {
    this.$store.dispatch('tarefas/loadTarefas')
  }
}
</script>

<style>
  .pointer {
    cursor: pointer
  }
  .finalizado {
    text-decoration: line-through
  }
</style>