module.exports = {
  root: true,
  extends: ["plugin:prettier/recommended", "@react-native-community"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      modules: true,
    },
    jsx: true,
  },
};


