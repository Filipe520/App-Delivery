const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const path = require("path");
const config = getDefaultConfig(__dirname);

config.resolver.alias = {
  "@appAssets": path.resolve(__dirname, "src/app/assets"),
};

module.exports = withNativeWind(config, { input: "./global.css" });
