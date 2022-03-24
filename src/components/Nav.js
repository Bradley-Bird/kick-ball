import React from 'react';
import { StyledList, StyledNavLink } from './styles/StyledNav';

function Nav() {
  return (
    <StyledList>
      <StyledNavLink exact to="/">
        <h4>Home</h4>
      </StyledNavLink>
      <StyledNavLink to="/teams">
        <h4>Teams</h4>
      </StyledNavLink>
      <StyledNavLink to="/players">
        <h4>Players</h4>
      </StyledNavLink>
    </StyledList>
  );
}

export default Nav;
