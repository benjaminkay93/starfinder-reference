module.exports = {
  extends: ['standard', 'plugin:react/recommended'],
  rules: {
    'comma-dangle': ['error', 'only-multiline'],
    'react/display-name': 0,
    'react/prop-types': 0,
  },
  "env": {
    "jest": true,
  },
  "settings": {
    "react": {
      "version": "16.9",
    },
  },
}

