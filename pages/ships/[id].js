import React, { useState } from 'react'
import Error from 'next/error'
import fetch from 'isomorphic-unfetch'
import { backgroundPoll } from 'utilities/background-fetch'
import { Radar } from 'components'

const fetchData = async ({ query: id }) => {
  const res = await fetch(`http://localhost:3000/api/ships?id=${id.id}`)
  const errorCode = res.status > 200 ? res.status : false
  const data = await res.json()

  return { errorCode, initialShip: data, id }
}

const Index = ({ errorCode, initialShip, id }) => {
  if (errorCode) {
    return <Error statusCode={errorCode} />
  }

  const [ship, setShip] = useState(initialShip)
  backgroundPoll({ hook: setShip, args: { query: id }, fetchFunction: fetchData, responseKey: 'initialShip', timeout: 30 * 1000 })

  return (
    <>
      {JSON.stringify(ship, null, 2)}
      <Radar />
    </>
  )
}

Index.getInitialProps = fetchData

export default Index
