import antfu from '@antfu/eslint-config'

export default antfu(
  {
    typescript: true,
    vue: false,
    ignores: [
      // eslint ignore globs here
    ],
  },
  {
    rules: {
      'no-console': 'off',
    },
  },
)
