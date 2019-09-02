const presets = [
  "next/babel"
]

const plugins = [
  [
    "styled-components",
    {
      "ssr": true,
      "preprocess": false
    }
  ],
  [
    'module-resolver',
    {
      root: ['./'],
      alias: {
        utilities: './utilities',
        components: './components',
        layouts: './layouts'
      }
    }
  ]
]

module.exports = {
  presets,
  plugins
}
