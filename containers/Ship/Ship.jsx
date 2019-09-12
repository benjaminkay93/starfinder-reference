import React from 'react'
import Stack from 'layouts/Stack'
import styled from 'styled-components'

const StyledBox = styled.div`
  height: 15px;
  width: 15px;
  padding: 15px;
  display: block;
  border: 2px black solid;
`
const Box = ({ children }) => (
  <StyledBox>
    {children}
  </StyledBox>
)

const Ship = ({ ship }) => {
  return (
    <>
      Hello
      {JSON.stringify(ship)}
      <Stack recursive>
        <Box>
          <Box>
            <Box />
            <Box />
            <Box />
          </Box>
          <Box />
        </Box>
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </Stack>
    </>
  )
}

export default Ship
