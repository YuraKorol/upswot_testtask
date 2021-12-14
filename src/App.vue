<template>
  <div id="app">
    <!-- <TodoModal /> -->
    <ErrorModal />
    <router-view />
  </div>
</template>

<script>
import ErrorModal from '@/components/modal/ErrorModal'
// import TodoModal from '@/components/modal/TodoModal'
import { mapActions } from 'vuex'

export default {
  components: {
    ErrorModal
    // TodoModal
  },
  methods: {
    ...mapActions(['LOAD_USER'])
  },
  mounted() {
    this.LOAD_USER()
  }
}
</script>

<style lang="scss">
body {
  margin: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
