const withTM = require("next-transpile-modules")([
  /*'@zepp/utils', '@zepp/epi', '@zepp/react'*/
]);

module.exports = withTM({
  async rewrites() {
    return [
      {
        source: "/preview/:slug*",
        destination: "/preview?slug=:slug*",
      },
    ];
  },
  images: {
    domains: ["a.storyblok.com"],
  },
  webpack(config, { webpack }) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: {
                removeViewBox: false,
              },
            },
          },
        },
      ],
    });
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__/));
    return config;
  },
});
