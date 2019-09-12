import React, { useState } from 'react'
import Error from 'next/error'
import fetch from 'isomorphic-unfetch'
import { backgroundPoll } from 'utilities/background-fetch'
import Ship from 'containers/Ship'

const fetchData = (responseKey) => async ({ query: id }) => {
  const res = await fetch(`http://localhost:3000/api/ships?id=${id.id}`)
  const errorCode = res.status > 200 ? res.status : false
  const data = await res.json()

  return { errorCode, [responseKey]: data, id }
}

const Index = ({ errorCode, initialShip, id }) => {
  if (errorCode) {
    return <Error statusCode={errorCode} />
  }

  const [ship, setShip] = useState(initialShip)
  backgroundPoll({ hook: setShip, args: { query: id }, fetchFunction: fetchData('ship'), responseKey: 'ship', timeout: 30 * 1000 })

  return <Ship ship={ship} />
}

Index.getInitialProps = fetchData('initialShip')

export default Index
