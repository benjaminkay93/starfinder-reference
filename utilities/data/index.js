import fs from 'fs'
import path from 'path'

const getBasePath = () => process.env.DEPLOYED ? '/tmp/starfinder-ref' : path.resolve(__dirname, '..', '..', 'database')

const getDirectory = ({ directory }) => {
  const basePath = getBasePath()
  const files = fs.readdirSync(`${basePath}/${directory}/`)

  if (files.length === 0) return undefined

  const data = files.filter(file => file.includes('.json')).reduce((accumulator, file) => {
    if (!file) return accumulator

    const fileName = file.split('.json')[0]
    const readFile = fs.readFileSync(`${basePath}/${directory}/${file}`, { encoding: 'utf-8' })
    return {
      ...accumulator,
      [fileName]: {
        ...JSON.parse(readFile)
      }
    }
  }, {})

  return data
}

const writeFile = ({ directory, name, data }) => {
  const basePath = getBasePath()
  fs.mkdirSync(`${basePath}/${directory}/`, { recursive: true })
  fs.writeFileSync(`${basePath}/${directory}/${name}.json`, JSON.stringify(data))
}

export {
  getDirectory,
  writeFile
}
