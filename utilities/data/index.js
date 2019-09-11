import fs from 'fs'

const basePath = process.env.DEPLOYED ? '/tmp/starfinder-ref/' : `${__dirname}/../../database/`

const getDirectory = ({ directory }) => {
  return fs.readdirSync(`${basePath}${directory}/`)
}

export {
  getDirectory
}
