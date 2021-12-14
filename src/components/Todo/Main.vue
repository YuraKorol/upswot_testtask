<template>
  <div class="main">
    <h1>Thank you {{ user.username }}!</h1>
    <Button bg="#0076c0" :width="100" class="main__add-btn" @click="OPEN_ADD_TODO_MODAL"
      >ADD</Button
    >
    <TodoList :todos="todos" />
  </div>
</template>

<script>
import TodoList from '@/components/Todo/list/TodoList'
import Button from '@/components/shared/Button'
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['user', 'todos'])
  },
  methods: {
    ...mapActions(['LOAD_USER', 'OPEN_ADD_TODO_MODAL'])
  },
  mounted() {
    this.LOAD_USER()
  },
  components: {
    TodoList,
    Button
  }
}
</script>

<style lang="scss" scoped>
.main {
  background-color: $white;
  position: relative;
  top: -400px;
  left: 10%;
  width: 80%;
  padding-top: 5px;

  &__add-btn {
    margin-bottom: 20px;
  }
}
</style>
