<template>
  <header class="header">
    <div class="header__logo-container">
      <LogoIcon class="header__logo-container__logo" :width="80" :height="40" />
    </div>
  </header>
</template>

<script>
import LogoIcon from '@/components/icons/LogoIcon'

export default {
  components: {
    LogoIcon
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: flex-end;
  height: 90px;
  width: 100%;
  background-color: $black-main;

  &__logo-container {
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    background: linear-gradient($blue-secondary, $blue-dark);

    &__logo {
      margin-left: 15%;
    }
  }
}
</style>
