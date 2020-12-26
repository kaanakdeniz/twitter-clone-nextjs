const path = require("path");

module.exports = {
  webpackFinal: async (baseConfig, options) => {
    // Modify or replace config. Mutating the original reference object can cause unexpected bugs.
    const { module = {} } = baseConfig;

    const newConfig = {
      ...baseConfig,
      module: {
        ...module,
        rules: [...(module.rules || [])],
      },
    };

    newConfig.module.rules.find((rule) => rule.test.toString() === "/\\.css$/").exclude = /\.module\.css$/;

    newConfig.module.rules.push({
      test: /\.module\.css$/,
      include: path.resolve(__dirname, "../components"),
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            importLoaders: 1,
            modules: true,
          },
        },
        {
          loader: "postcss-loader",
          options: {
            sourceMap: true,
            config: {
              path: "./.storybook/",
            },
          },
        },
      ],
    });

    return newConfig;
  },
};
