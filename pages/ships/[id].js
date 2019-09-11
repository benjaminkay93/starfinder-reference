import React from 'react'
import Error from 'next/error'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components';

const Title = styled.h1`
  color: red;
`;

const Index = ({errorCode, ship}) => {
  if (errorCode) {
    return <Error statusCode={errorCode} />
  }
  
  return (
    <>
      {JSON.stringify(ship, null, 2)}
    </>
  )
};

Index.getInitialProps = async ({ query: id }) => {
  const res = await fetch(`http://localhost:3000/api/ships?id=${id.id}`)
  const errorCode = res.status > 200 ? res.status : false
  const json = await res.json()

  console.log()

  return { errorCode, ship: json }
}

export default Index
