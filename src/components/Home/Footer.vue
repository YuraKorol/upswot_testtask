<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__container__top">
        <LogoIcon class="footer__container__top__icon" :width="44" :height="32" />
        <ul class="footer__container__top__list">
          <li class="footer__container__top__list__item" v-for="link in footerLinks" :key="link">
            <small>{{ link }}</small>
          </li>
        </ul>
      </div>
      <hr style="width: 100%" />
      <small class="footer__container__bottom">
        Copyright &copy; 2020 Citigroup Inc. Citibank, N.A. Member FDIC. Equal Opportunity
        Lender.</small
      >
    </div>
  </footer>
</template>

<script>
import LogoIcon from '@/components/icons/LogoIcon'

export default {
  props: {
    footerLinks: {
      type: Array,
      default: () => []
    }
  },
  components: {
    LogoIcon
  }
}
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  background-color: $black-main;
  padding: 20px 0px;
  &__container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0px 150px;
    @include media576max {
      margin: 0px 50px;
    }

    &__top {
      display: flex;
      justify-content: space-between;
      width: 100%;

      &__icon {
        @include media768max {
          display: none;
        }
      }

      &__list {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        color: $white;

        @include media768max {
          padding: 0px;
        }

        &__item {
          text-align: start;
        }
      }
    }
    &__bottom {
      color: $white;
      font-size: 10px;
      margin-top: 20px;
    }
  }
}
</style>
