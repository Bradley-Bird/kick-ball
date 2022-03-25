import Nav from '../components/Nav';
import { StyledHeader } from '../components/styles/StyledHeader';
import styled from 'styled-components';

function Header() {
  return (
    <StyledHeader>
      <StyledImg src={`${process.env.PUBLIC_URL}/headerImg.png`} />
      <Nav />
    </StyledHeader>
  );
}

const StyledImg = styled.img`
  height: 100px;
`;
export default Header;
