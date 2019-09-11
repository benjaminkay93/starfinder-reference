import { getDirectory, writeFile } from 'utilities/file-manager'

let data = getDirectory({ directory: 'ships' })

const handleGet = ({ res, id }) => {
  if (data[id]) {
    res.json(data[id])
  } else {
    res.status(404).end(JSON.stringify({ data: 'Not Found' }))
  }
}

const handlePost = ({ req, res, id }) => {
  const parsedBody = JSON.parse(req.body)

  data = {
    ...data,
    [id]: {
      ...parsedBody
    }
  }
  res.status(202).end()
  console.log(parsedBody)
  writeFile({ directory: 'ships', name: id, data: parsedBody })
}

const handle = async (req, res) => {
  const id = req.query.id
  if (!id) {
    res.status(200).json(Object.keys(data))
    return undefined
  }
  switch (req.method) {
    case 'GET':
      handleGet({ res, id })
      break
    case 'POST':
      handlePost({ req, res, id })
      break
    default:
      res.status(403).end()
  }
}

export default handle
