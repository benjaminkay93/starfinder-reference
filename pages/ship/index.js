import React from 'react'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components';
import Link from 'components/Link'

const Title = styled.h1`
  color: red;
`;

const Index = ({data}) => {
  console.log(data)
  
  return (
    <>
      {data.map((item, key) => (
        <Link key={key} href={`/ship/${item}`}>
          {item}
        </Link>
      ))}
    </>
  )
};

Index.getInitialProps = async ({ query: id }) => {
  const res = await fetch(`http://localhost:3000/api/ship`)
  const data = await res.json()

  return {data}
}

export default Index
