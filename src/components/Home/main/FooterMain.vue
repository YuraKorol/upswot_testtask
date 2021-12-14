<template>
  <div class="main-footer">
    <div class="main-footer__text">
      <p>
        <b>Business Analytics —</b> a new, convenient tool for managing and forecasting your
        business performance, which will help analyze your own finances and cash flows, visualize
        your reporting, business processes, KPI's
      </p>
      <div class="main-footer__text__list" v-for="paragraph in mainParagraphs" :key="paragraph._id">
        <div class="main-footer__text__list__icon" v-if="paragraph.mark">
          <TrueIcon />
        </div>
        <div>
          <h4 class="main-footer__text__list__title">{{ paragraph.title }}</h4>
          <p>
            {{ paragraph.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TrueIcon from '@/components/icons/TrueIcon'

export default {
  props: {
    mainParagraphs: {
      type: Array,
      default: () => []
    }
  },
  components: {
    TrueIcon
  }
}
</script>

<style lang="scss" scoped>
.main-footer {
  width: 100%;

  &__text {
    line-height: 1.4;
    width: 44%;
    margin-left: 150px;
    text-align: start;
    @include media992max {
      margin: 250px auto 0 auto;
      width: 80%;
    }
    @include media480max {
      margin: 270px auto 0 auto;
    }

    &__list {
      display: flex;
      align-items: flex-start;
      &__icon {
        margin-right: 10px;
      }

      &__title {
        display: flex;
        margin-top: 0px;
      }
    }
  }
}
</style>
