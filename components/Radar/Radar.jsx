import React from 'react'
import styled from 'styled-components'

// Got Radar circle from a CodePen then altered to fit our usage https://codepen.io/robert-peri/pen/maJpgz
// Got outer from https://codepen.io/hugo/pen/ypcqb

const RadarScan = styled.span`
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

const Circle = styled.span`
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

const OuterCircle = styled.div`
  animation: circle1 4s linear infinite; 
  background: #000;
  border-radius: 50%;
  border: 10px solid #00a4a2;
  box-shadow:0 0 0 2px black, 0 0 0 6px  #00fffc;
  height: 500px;
  width: 500px;
  position: absolute;
  top: 20px;
  left: 50%;
  margin-left: -250px;
  overflow: hidden;
  opacity: 1;
   z-index: -3; 

  @keyframes circleSpin {
    0% {
      @include rotate (0deg);
    }  
    100% {
      @include rotate (360deg);
    }
  }
`

const InnerCircle = styled.div`
  box-sizing: border-box;
  background-size: cover;
  font-size: 10px;
  overflow: hidden;
  text-align: center;

  background: #000; 
  border-radius: 50%;
  border: 36px solid #00fffc; 
  height: 460px; 
  width: 460px; 
  margin: 10px;
  
  
  :before {
    content: ' ';
    width: 240px;
    height: 480px;
    background: #000;
    position: absolute;
    top: 0;
    left: 0;
  }
  :after {
    content: ' ';
    width: 480px;
    height: 240px; 
    background: #000;
    position: absolute;
    top: 0;
    left: 0; 
  }
 `

const Radar = () => (
  <>
  <OuterCircle>
    <InnerCircle />
  </OuterCircle>
    {/* <Circle>
      <RadarScan/>
    </Circle> */}
</>)

export default Radar
