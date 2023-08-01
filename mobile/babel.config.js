module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],

    plugins: [
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
        },
      ],
      ["module-resolver", {
        "alias": {
          "@Components": "./src/components",
          "@Redux": "./src/redux",
          "@Routes": "./src/routes",
          "@Functions": "./src/functions/index",
        },
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
        ]
      }],
    ],
  };
};
