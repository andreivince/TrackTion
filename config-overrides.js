module.exports = function override(config, env) {
  if (env === "development") {
    config.devtool = "source-map"; // Avoid eval in development mode
  }
  return config;
};
