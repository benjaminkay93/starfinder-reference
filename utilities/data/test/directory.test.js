import { getDirectory } from '../'
import fs from 'fs'
import path from 'path'

jest.mock('fs')

test('fetchs directory and parses json', () => {
  fs.readdirSync = jest.fn().mockReturnValue(['someDriectory', 'someFile.json', 'someOtherDirectory'])
  fs.readFileSync = jest.fn().mockReturnValue(JSON.stringify({ some: 'value' }))

  expect(getDirectory({ directory: 'someDirectory' })).toEqual({ someFile: { some: 'value' } })
})

test('handles empty directories', () => {
  fs.readdirSync = jest.fn().mockReturnValue([])
  expect(getDirectory({ directory: 'someDirectory' })).toBeUndefined()
})

test('handles directories that dont have json', () => {
  fs.readdirSync = jest.fn().mockReturnValue(['someFile'])

  expect(getDirectory({ directory: 'someDirectory' })).toEqual({})
})

test('looks in local database', () => {
  const expectedDirectory = 'someDirectory'
  const expectedFilename = 'someFile.json'
  fs.readdirSync = jest.fn().mockReturnValue([expectedFilename])
  fs.readFileSync = jest.fn().mockReturnValue(JSON.stringify({ some: 'value' }))

  getDirectory({ directory: expectedDirectory })

  expect(fs.readdirSync).toHaveBeenCalledWith(`${path.resolve(__dirname, '..', '..', '..', 'database', expectedDirectory)}/`)
  expect(fs.readFileSync).toHaveBeenCalledWith(`${path.resolve(__dirname, '..', '..', '..', 'database', expectedDirectory, expectedFilename)}`, { encoding: 'utf-8' })
})

test('looks in deployed database', () => {
  process.env.DEPLOYED = true

  const expectedDirectory = 'someDirectory'
  const expectedFilename = 'someFile.json'

  fs.readdirSync = jest.fn().mockReturnValue([expectedFilename])
  fs.readFileSync = jest.fn().mockReturnValue(JSON.stringify({ some: 'value' }))

  getDirectory({ directory: expectedDirectory })

  expect(fs.readdirSync).toHaveBeenCalledWith(`/tmp/starfinder-ref/${expectedDirectory}/`)
  expect(fs.readFileSync).toHaveBeenCalledWith(`/tmp/starfinder-ref/${expectedDirectory}/${expectedFilename}`, { encoding: 'utf-8' })

  delete process.env.DEPLOYED
})
