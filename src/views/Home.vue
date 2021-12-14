<template>
  <div class="home">
    <Header />
    <Main :mainParagraphs="config.mainParagraphs" />
    <Footer :footerLinks="config.footerLinks" />
  </div>
</template>

<script>
import Header from '@/components/Home/Header'
import Main from '@/components/Home/main/Main'
import Footer from '@/components/Home/Footer'

import { homeConfig } from '@/utils/config'

export default {
  name: 'Home',
  data() {
    return {
      config: homeConfig
    }
  },
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
}
</style>
