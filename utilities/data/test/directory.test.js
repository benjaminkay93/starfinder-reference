import { getDirectory } from '../'

test('fetchs directory', () => {
  expect(getDirectory('ships')).toBe({})
})