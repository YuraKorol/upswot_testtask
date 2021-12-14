<template>
  <li class="todo-item">
    <Input
      @input="takeTitle"
      width="90%"
      label="Edit title"
      name="title"
      v-if="isEdit"
      :data="todo.title"
    ></Input>
    <span v-else class="todo-item__title" :data-title="todo.title">
      {{ todo.title }}
    </span>
    <small class="todo-item__date">{{ todo.createdAt }}</small>
    <div class="todo-item__btns">
      <Button bg="#0076c0" :width="80" @click="isEdit = !isEdit">{{
        isEdit ? 'Cancel' : 'Edit'
      }}</Button>
      <Button @click="editTodo" color="#1dd75f" v-if="isEdit">Save</Button>
      <Button @click="DELETE_TODO(todo)" color="red" :width="90">Delete</Button>
    </div>
  </li>
</template>

<script>
import Button from '@/components/shared/Button'
import Input from '@/components/shared/Input'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      isEdit: false,
      title: ''
    }
  },
  props: {
    todo: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    ...mapActions(['OPEN_ADD_TODO_MODAL', 'EDIT_TODO', 'DELETE_TODO']),
    takeTitle(data) {
      this.title = data
    },
    editTodo() {
      this.EDIT_TODO({
        title: this.title,
        _id: this.todo._id,
        createdAt: this.todo.createdAt
      })
      this.isEdit = false
    }
  },
  components: {
    Button,
    Input
  }
}
</script>

<style lang="scss" scoped>
.todo-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 150px;
  border-radius: 10px;
  box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.1);
  padding: 40px 30px;

  @include media576max {
    width: 170px;
  }

  &__btns {
    display: flex;
    justify-content: space-between;
  }

  &__date {
    align-self: flex-end;
  }

  &__title {
    cursor: help;
    max-height: 35px;
    overflow: hidden;
    text-overflow: ellipsis;
    &:hover::after {
      content: attr(data-title);
      position: absolute;
      z-index: 1;
      background: $gray-light;
      font-family: Arial, sans-serif;
      font-size: 11px;
      padding: 5px;
      border-radius: 5px;
      width: 100px;
      word-wrap: break-word;
      box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
