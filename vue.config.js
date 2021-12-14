module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/scss/colors.scss";
          @import "@/assets/scss/grid.scss";
        `
      }
    }
  }
}
