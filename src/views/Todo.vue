<template>
  <div class="todo">
    <TodoModal />
    <div>
      <div class="todo__gradient">
        <LogoIcon style="margin-top: 35px" />
      </div>
      <Main />
    </div>
  </div>
</template>

<script>
import Main from '@/components/Todo/Main'
import TodoModal from '@/components/modal/TodoModal'
import LogoIcon from '@/components/icons/LogoIcon'

export default {
  components: {
    Main,
    LogoIcon,
    TodoModal
  }
}
</script>

<style lang="scss" scoped>
.todo {
  width: 100%;
  background-color: $gray-secondary;

  &__gradient {
    background: linear-gradient($blue-secondary, $blue-dark);
    height: 70vh;
    width: 100%;
  }
}
</style>
