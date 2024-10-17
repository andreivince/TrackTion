module.exports = function override(config, env) {
  if (env === "development") {
    config.devtool = "source-map"; // Change from eval to source-map
  }
  return config;
};
