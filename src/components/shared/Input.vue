<template>
  <div class="input-container">
    <label class="input-container__label" v-if="label" :for="name">
      <small>{{ label }}</small>
    </label>
    <input
      v-model="newData"
      @input="$emit('input', newData)"
      class="input-container__input"
      :id="name"
      :type="type"
      :placeholder="placeholder"
      :style="{
        width: width
      }"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      newData: this.data
    }
  },
  props: {
    data: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.input-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &__input {
    height: 23px;
    border: 1px solid $gray-main;
    outline: none;
    padding: 2px 8px;
    width: 94%;

    &:focus {
      border: 1px solid $black-dark;
    }
  }
  &__label {
    margin-bottom: 5px;
    color: $black-main;
  }
}
</style>
