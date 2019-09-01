import { pxToRem } from '..'

test('return 1rem when passed 16px', () => {
  expect(pxToRem(16)).toEqual('1rem')
})
