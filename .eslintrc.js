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
  ],
  rules: {
    'react/jsx-indent': [
      'error', 2, {
        checkAttributes: true,
        indentLogicalExpressions: true,
      },
    ],
    'react/jsx-indent-props': ['error', 2],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/object-curly-spacing': [
      'error', 'always', { arraysInObjects: false },
    ]
  }
}
