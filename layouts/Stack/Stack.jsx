import React from 'react'
import styled from 'styled-components'

const StyledStack = styled.div`
  --space: 1.5rem;

  > * {
    margin-top: 0;
    margin-bottom: 0;
  } 

  > * + * {
    margin-top: ${({ theme }) => theme.spacing.base};
  }
`

const Stack = ({ children }) => (
  <StyledStack>
    {children.map((child, key) => <div key={key}>{child}</div>)}
  </StyledStack>
)

export default Stack
