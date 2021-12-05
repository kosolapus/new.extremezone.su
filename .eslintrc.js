module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['@nuxtjs', '@nuxtjs/eslint-config-typescript', 'plugin:nuxt/recommended', 'plugin:prettier/recommended'],
  plugins: ['prettier', 'nuxt', 'vue'],
  // add your custom rules here
  rules: {},
}
