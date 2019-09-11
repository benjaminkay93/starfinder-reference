import { getDirectory } from '../'
import fs from 'fs'

jest.mock('fs')

test('fetchs directory and parses json', () => {
  fs.readdirSync = jest.fn().mockReturnValue(['someDriectory', 'someFile.json', 'someOtherDirectory'])
  fs.readFileSync = jest.fn().mockReturnValue(JSON.stringify({ some: 'value' }))

  expect(getDirectory({ directory: 'someDirectory' })).toEqual({ someFile: { some: 'value' } })
})

test('handles empty directories', () => {
  fs.readdirSync = jest.fn().mockReturnValue([])
  expect(getDirectory({ directory: 'someDirectory' })).toEqual({})
})

test('handles directories that dont have json', () => {
  fs.readdirSync = jest.fn().mockReturnValue(['someFile'])

  expect(getDirectory({ directory: 'someDirectory' })).toEqual({})
})

test('looks in database', () => {
  const expectedDirectory = 'someDirectory'
  const expectedFilename = 'someFile.json'

  fs.readdirSync = jest.fn().mockReturnValue([expectedFilename])
  fs.readFileSync = jest.fn().mockReturnValue(JSON.stringify({ some: 'value' }))

  getDirectory({ directory: expectedDirectory })

  expect(fs.readdirSync).toHaveBeenCalledWith(`/tmp/starfinder/${expectedDirectory}/`)
  expect(fs.readFileSync).toHaveBeenCalledWith(`/tmp/starfinder/${expectedDirectory}/${expectedFilename}`, { encoding: 'utf-8' })
})
