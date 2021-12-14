<template>
  <div class="modal-shadow" v-if="isOpenTodoModal">
    <div class="todo-modal">
      <Button
        @click="CLOSE_ADD_TODO_MODAL"
        class="todo-modal__btn-close"
        color="black"
        :font="20"
        :width="20"
        >x</Button
      >
      <h2>Todo</h2>
      <Input width="90%" label="Title" name="title" v-model="title" />
      <Button
        @click="sendTodo"
        class="todo-modal__btn-create"
        color="white"
        :font="20"
        bg="#0076c0"
        :width="80"
      >
        Create
      </Button>
    </div>
  </div>
</template>

<script>
import Input from '@/components/shared/Input'
import Button from '@/components/shared/Button'
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      title: ''
    }
  },
  computed: {
    ...mapGetters(['isOpenTodoModal', 'todo']),
    nowDate() {
      const d = new Date()
      const day = d.getDate()
      const month = d.getMonth() + 1
      const year = d.getFullYear()
      return `${day}.${month}.${year}`
    }
  },
  methods: {
    ...mapActions(['CLOSE_ADD_TODO_MODAL', 'EDIT_TODO', 'ADD_TODO']),
    sendTodo() {
      this.ADD_TODO({
        _id: Date.now(),
        title: this.title,
        createdAt: this.nowDate
      })
    }
  },
  components: {
    Input,
    Button
  }
}
</script>

<style lang="scss" scoped>
.modal-shadow {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.39);
  height: 100%;
  width: 100%;
  z-index: 1;
}
.todo-modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: $white;
  width: 400px;
  height: 200px;
  padding: 10px 15px 20px 15px;
  box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  &__btn-close {
    align-self: flex-end;
  }
  &__btn-create {
    margin-top: 15px;
  }
}
</style>
