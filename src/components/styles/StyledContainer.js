import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledContainer = styled.div`
  background: linear-gradient(to bottom, #ddd6f3, #faaca8);
  display: flex;
  align-items: top;
  text-align: center;
  height: 100vh;

  & > div {
    flex: 1;
  }
`;
export default StyledContainer;

export const StyledList = styled.div`
  p,
  h2 {
    position: relative;
    display: flex;
    justify-content: flex-end;
    top: 5rem;
    right: 1rem;
    color: Black;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: flex-end;
`;
