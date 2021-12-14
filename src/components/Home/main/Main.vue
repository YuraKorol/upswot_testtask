<template>
  <main class="main">
    <HeaderMain />
    <FormMain />
    <FooterMain :mainParagraphs="mainParagraphs" />
  </main>
</template>

<script>
import FormMain from '@/components/Home/main/FormMain'
import FooterMain from '@/components/Home/main/FooterMain'
import HeaderMain from '@/components/Home/main/HeaderMain'

export default {
  props: {
    mainParagraphs: {
      type: Array,
      default: () => []
    }
  },
  components: {
    FormMain,
    FooterMain,
    HeaderMain
  }
}
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
}
</style>
