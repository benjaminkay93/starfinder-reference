import pxToRem from './px-to-rem'

const theme = {
  spacing: {
    base: pxToRem(12),
    half: pxToRem(6),
    third: pxToRem(4),
    quater: pxToRem(3),
    double: pxToRem(24)
  },
  color: {
    background: '#FFFFFF',
    primary: 'rgb(17,29,62)',
    accent: 'rgb(17,29,62)',
    accentContrast: 'rgb(239,155,20)'
  }
}

export default theme
