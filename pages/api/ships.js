let data = {
  stub: {
    shipName: 'Kintaro',
    make: 'Racing Yacht',
    frame: 'Explorer',
    speed: 12,
    drift: 3,
    pcu: 300,
    tier: 9,
    forward: {
      shields: {
        max: 90,
        damage: 0
      }
    },
    port: {
      shields: {
        max: 90,
        damage: 0
      }
    },
    starboard: {
      shields: {
        max: 90,
        damage: 0
      }
    },
    aft: {
      shields: {
        max: 90,
        damage: 0
      }
    }
  }
}

const handleGet = ({ res, id }) => {
  if (data[id]) {
    res.json(data[id])
  } else {
    res.status(404).end(JSON.stringify({ data: 'Not Found' }))
  }
}

const handlePost = ({ req, res, id }) => {
  const parsedBody = JSON.parse(req.body)
  console.log(id, parsedBody)
  data = {
    ...data,
    [id]: {
      ...parsedBody
    }
  }
  res.status(202).end()
}

const handle = async (req, res) => {
  const id = req.query.id
  if (!id) {
    res.status(200).json(Object.keys(data))
    return undefined
  }
  console.log(id)
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
