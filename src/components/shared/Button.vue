<template>
  <button
    class="btn"
    :style="{
      backgroundColor: bg,
      fontSize: font + 'px',
      color: color,
      width: width ? width + 'px' : '100%'
    }"
    :class="{ hovered: bg === 'transparent' ? false : true }"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    bg: {
      type: String,
      default: 'transparent'
    },
    font: {
      type: Number,
      default: 14
    },
    color: {
      type: String,
      default: 'white'
    },
    width: {
      type: Number
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  cursor: pointer;
  outline: none;
  border: none;
  height: 30px;
}
.hovered {
  &:hover {
    background-color: $white !important;
    border: 2px solid $blue-main;
    color: $blue-main !important;
  }
}
</style>
