module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  overrides: [
    {
      files: ['*.{ts,tsx}'],
      extends: [
        'plugin:@typescript-eslint/recommended'
      ],
      parserOptions: {
        project: ['./tsconfig.json']
      }
    }
  ],
  plugins: [
    'react'
  ]
}
