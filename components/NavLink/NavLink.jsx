import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const StyledLink = styled.a`
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing.base};
  text-transform: uppercase;
  font-weight: bold;

  :hover,
  :active {
    padding-bottom: ${({ theme }) => theme.spacing.quater};
    cursor: pointer;
    border-bottom-width: ${({ theme }) => theme.spacing.quater};
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.color.accent};
  }
`

const BaseLink = ({ children, className, href }) => (
  <Link href={href}>
    <StyledLink className={className}>{children}</StyledLink>
  </Link>
)

export default BaseLink
