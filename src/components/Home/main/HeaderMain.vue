<template>
  <div class="main-header">
    <span class="main-header__title-container">
      <h1 class="main-header__title-container__title">Welcome to</h1>
      <h1 class="main-header__title-container__title">Business Analytics Online</h1>
    </span>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.main-header {
  display: flex;
  align-items: flex-end;
  height: 350px;
  background-image: url(../../../assets/img/background-main.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &__title-container {
    width: 100%;

    @include media992max {
      margin-bottom: 20px;
    }

    &__title {
      text-align: start;
      margin: 0;
      color: $white;
      line-height: 1.4;
      font-weight: 300;
      margin-left: 150px;
      margin-bottom: 4px;

      @include media992max {
        text-align: center;
        margin-left: 0px;
      }

      &:last-child {
        margin-bottom: 60px;
      }
    }
  }
}
</style>
