import { getDirectory } from '../'
import fs from 'fs'
import path from 'path'

jest.mock('fs')

test('fetchs directory', () => {
  fs.readdirSync = jest.fn().mockReturnValue(['someFile.json'])

  expect(getDirectory({ directory: 'ships' })).toEqual(['someFile.json'])
  expect(fs.readdirSync).toHaveBeenCalledWith(`${path.resolve(__dirname, '..')}/../../database/ships/`)
})
