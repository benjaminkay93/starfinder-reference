import styled from 'styled-components';
import Sidebar from 'layouts/Sidebar'

const Title = styled.h1`
  color: red;
`;

const Index = () => {

  const left = "hello there";
  const right = "some daft thing ere";
  
  return (
    <>
      <Title>Hello, World!</Title>
      <Sidebar left={left} right={right} sidebarOnRight />
    </>
  )
};

export default Index
