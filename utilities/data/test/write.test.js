import { writeFile } from '../'
import fs from 'fs'
import path from 'path'

jest.mock('fs')

test('writes data locally', () => {
  fs.mkdirSync = jest.fn()
  fs.writeFileSync = jest.fn()

  const expectedDirectory = 'someDirectory'
  const expectedName = 'someFile'
  const expectedData = { some: 'data' }

  writeFile({ directory: expectedDirectory, name: expectedName, data: expectedData })

  expect(fs.mkdirSync).toHaveBeenCalledWith(`${path.resolve(__dirname, '..', '..', '..', 'database', expectedDirectory)}/`, { recursive: true })
  expect(fs.writeFileSync).toHaveBeenCalledWith(`${path.resolve(__dirname, '..', '..', '..', 'database', expectedDirectory, expectedName)}.json`, JSON.stringify(expectedData))
})

test('writes data deployed', () => {
  process.env.DEPLOYED = true

  fs.mkdirSync = jest.fn()
  fs.writeFileSync = jest.fn()

  const expectedDirectory = 'someDirectory'
  const expectedName = 'someFile'
  const expectedData = { some: 'data' }

  writeFile({ directory: expectedDirectory, name: expectedName, data: expectedData })

  expect(fs.mkdirSync).toHaveBeenCalledWith(`/tmp/starfinder-ref/${expectedDirectory}/`, { recursive: true })
  expect(fs.writeFileSync).toHaveBeenCalledWith(`/tmp/starfinder-ref/${expectedDirectory}/${expectedName}.json`, JSON.stringify(expectedData))

  delete process.env.DEPLOYED
})
