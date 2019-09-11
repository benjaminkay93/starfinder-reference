import { writeFile } from '../'
import fs from 'fs'

jest.mock('fs')

test('writes data deployed', () => {
  process.env.DEPLOYED = true

  fs.mkdirSync = jest.fn()
  fs.writeFileSync = jest.fn()

  const expectedDirectory = 'someDirectory'
  const expectedName = 'someFile'
  const expectedData = { some: 'data' }

  writeFile({ directory: expectedDirectory, name: expectedName, data: expectedData })

  expect(fs.writeFileSync).toHaveBeenCalledWith(`/tmp/starfinder/${expectedDirectory}/${expectedName}.json`, JSON.stringify(expectedData))

  delete process.env.DEPLOYED
})
