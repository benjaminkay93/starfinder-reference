import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import NavLink from '../NavLink'

const StyledNavigation = styled.nav`
  display: flex;
  border-bottom: 1px solid;
  background-color: ${({ theme }) => theme.color.accentContrast};
`

const StyledLink = styled(NavLink)`
  margin-right: ${({ theme }) => theme.spacing.half};
`

const Navigation = ({children}) => (
  <>
    <StyledNavigation>
      <StyledLink href="/">
        Home
      </StyledLink>
      <StyledLink href="/race">
        Race
      </StyledLink>
      <StyledLink href="/class">
        Class
      </StyledLink>
    </StyledNavigation>
    {children}
  </>
)

export default Navigation
