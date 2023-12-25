const withNextIntl = require("next-intl/plugin")();

module.exports = withNextIntl({
  compiler: {
    styledComponents: true,
  },
});
