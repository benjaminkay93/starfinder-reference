import React, { useState, useEffect } from 'react'
import Error from 'next/error'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components';
import backgroundFetch from 'utilities/background-fetch'

const Title = styled.h1`
  color: red;
`;

const fetchData = async ({ query: id }) => {
  const res = await fetch(`http://localhost:3000/api/ships?id=${id.id}`)
  const errorCode = res.status > 200 ? res.status : false
  const data = await res.json()

  return { errorCode, initialShip: data, id }
}

const Index = ({errorCode, initialShip, id}) => {
  if (errorCode) {
    return <Error statusCode={errorCode} />
  }

  const [ship, setShip] = useState(initialShip)

  useEffect(() => {
    const interval = setInterval(async () => {
      const { initialShip } = await fetchData({query: id})
      setShip(initialShip)
    }, 10 * 1000);

    return () => {
      clearInterval(interval);
    };
  });
  
  return (
    <>
      {JSON.stringify(ship, null, 2)}
    </>
  )
};

Index.getInitialProps = fetchData

export default Index
