<template>
  <div id="app">
    <div class="container mt-3">
      <div class="input-group">
        <input type="text" class="form-control">
        <span class="input-group-btn">
          <button class="btn btn-info" type="button">Add</button>
        </span>
      </div>
      <hr>
      <ul class="list-group">
        <li class="list-group-item pointer" v-for="tarefa in tarefas" :key="tarefa.id">
          <span :class="{ finalizado: tarefa.finalizada }">{{ tarefa.descricao }}</span>
          <button class="btn btn-sm btn-danger float-right">Del</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    tarefas() {
      return this.$store.getters['tarefas/getTarefas'] 
    }
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