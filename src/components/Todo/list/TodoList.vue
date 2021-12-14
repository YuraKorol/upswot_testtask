<template>
  <ul class="todo-list">
    <template v-if="todos.length">
      <TodoItem v-for="todo in todos" :key="todo._id" :todo="todo" />
    </template>
    <div v-else>No one todo!</div>
  </ul>
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
  props: {
    todos: {
      type: Array,
      default: () => []
    }
  },
  components: {
    TodoItem
  }
}
</script>

<style lang="scss" scoped>
.todo-list {
  display: flex;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
  margin: 0 20px;
  padding: 0px 0px 50px 0px;
}
</style>
