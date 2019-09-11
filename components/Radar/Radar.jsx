import React from 'react'
import styled from 'styled-components'

const StlyedRadarScan = styled.span`
  list-style: none;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 250px;
  height: 250px;
  transform-origin: top left;
  background: linear-gradient(45deg, #000 0%, transparent 50%);
  animation: animate 3s linear infinite;

  @keyframes animate{
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }
`

const StyledRadar = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 480px;
  height: 480px;
  background: ${({ theme }) => theme.color.midground};
  border: 10px solid ${({ theme }) => theme.color.offMid};
  border-radius: 50%;
  box-shadow: 0 0 0 #c5c5c5, inset 0 0 100px #0059ff;
  overflow: hidden;
  transform: translate(-50%,-50%);
`

const Radar = () => (
  <StyledRadar>
    <StlyedRadarScan/>
  </StyledRadar>
)

export default Radar
