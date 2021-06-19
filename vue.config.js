module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "~/src/assets/style/scss/_colors.scss";
          @import "~/src/assets/style/scss/_breakpoints.scss";
          @import "~/src/assets/style/scss/_reset.scss";
          @import "~/src/assets/style/scss/style.scss";
        `,
      },
    },
  },
};
