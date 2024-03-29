import React from 'react'
import styled from 'styled-components'
import NavLink from '../NavLink'

const StyledNavigation = styled.nav`
  display: flex;
  color: ${({ theme }) => theme.color.midgroundText};
  background-color: ${({ theme }) => theme.color.midground};
  border-bottom: 4px solid ${({ theme }) => theme.color.border};
`

const Navigation = ({ children }) => (
  <>
    <StyledNavigation>
      <NavLink href="/">
        Home
      </NavLink>
      <NavLink href="/race">
        Race
      </NavLink>
      <NavLink href="/class">
        Class
      </NavLink>
      <NavLink href="/ships">
        Ships
      </NavLink>
    </StyledNavigation>
    {children}
  </>
)

export default Navigation
