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
        <li class="list-group-item" style="cursor:pointer">Tarefa 1
          <button class="btn btn-sm btn-danger float-right">Del</button>
        </li>
        <li class="list-group-item">Tarefa 2
          <button class="btn btn-sm btn-danger float-right">Del</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>