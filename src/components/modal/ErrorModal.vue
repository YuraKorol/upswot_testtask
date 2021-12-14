<template>
  <div class="modal" v-if="isError">{{ error }}</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['error', 'isError'])
  }
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  bottom: 30px;
  right: 50px;
  background-color: $blue-main;
  color: $white;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.1);
}
</style>
