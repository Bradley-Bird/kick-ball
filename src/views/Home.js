import React from 'react';
import styled from 'styled-components';

function Home() {
  return (
    <HomeContainer>
      <h1>Welcome to the Kickball League Directory</h1>
      <StyledVideo loop autoPlay muted>
        <source src={`${process.env.PUBLIC_URL}/backgroundVideo.mp4`} />
      </StyledVideo>
      <Gradient />
    </HomeContainer>
  );
}

const StyledVideo = styled.video`
  position: absolute;
  object-fit: cover;
  top: 136px;
  width: 100%;

  @media (max-width: 768px) {
    height: 100%;
  } ;
`;

const HomeContainer = styled.div`
  display: flex;

  h1 {
    position: relative;
    bottom: 80%;
    left: 10%;
    color: #f0fff0;
    z-index: 1000;
  }
`;
const Gradient = styled.div`
  z-index: 3;
  position: fixed;
  top: 116px;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;
export default Home;
