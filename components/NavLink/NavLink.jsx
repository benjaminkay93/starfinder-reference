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

    cursor: pointer;
    color: ${({theme}) => theme.color.primary};
    background: linear-gradient(90deg, ${({theme}) => theme.color.midground} 0%, ${({theme}) => theme.color.offMid} 20%, ${({theme}) => theme.color.offMid} 80%, ${({theme}) => theme.color.midground} 100%);
  }

  :focus {
    outline: transparent;
  }
`

const BaseLink = ({ children, className, href }) => (
  <Link href={href}>
    <StyledLink className={className}>{children}</StyledLink>
  </Link>
)

export default BaseLink
