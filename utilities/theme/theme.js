import pxToRem from './px-to-rem'

const color = {
  light: {
    background: '#FFFFFF',
    primary: 'rgb(0,24,57)',
  },
  dark: {
    background: 'rgb(0,24,57)',
    primary: '#FFFFFF',
  },
  common: {
    accent: 'rgb(17,29,62)',
    border: 'rgb(57,173,227)',
    midground: 'rgb(35,86,131)',
    midgroundText: '#FFFFFF',
    offMid: 'rgb(173,222,222)',
    offMidText: 'rgb(0,24,57)',
  }
}

const theme = ({ mode }) => ({
  spacing: {
    base: pxToRem(12),
    half: pxToRem(6),
    third: pxToRem(4),
    quater: pxToRem(3),
    double: pxToRem(24)
  },
  color: {
    ...color.common,
    ...color[mode]
  }
})

export default theme
