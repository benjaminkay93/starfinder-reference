import fs from 'fs'

const getBasePath = () => '/tmp/starfinder'

const getDirectory = ({ directory }) => {
  const basePath = getBasePath()

  let files
  try {
    files = fs.readdirSync(`${basePath}/${directory}/`)
  } catch (e) {
    fs.mkdirSync(`${basePath}/${directory}/`, { recursive: true })
    files = []
  }

  if (files.length === 0) return {}

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
  fs.writeFileSync(`${basePath}/${directory}/${name}.json`, JSON.stringify(data))
}

export {
  getDirectory,
  writeFile
}
