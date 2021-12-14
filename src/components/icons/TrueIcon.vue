<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 23 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.9584 0L23 2.99416L8.77173 17L0 8.36558L3.04162 5.37142L8.77173 11.0118L19.9584 0Z"
      :fill="fill"
    />
  </svg>
</template>

<script>
export default {
  props: {
    fill: {
      type: String,
      default: '#0076C0'
    },
    height: {
      type: Number,
      default: 20
    },
    width: {
      type: Number,
      default: 20
    }
  }
}
</script>

<style lang="scss" scoped></style>
