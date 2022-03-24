import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <List>
      <Slink exact to="/">
        <h4>Home</h4>
      </Slink>
      <Slink to="/teams">
        <h4>Teams</h4>
      </Slink>
      <Slink to="/players">
        <h4>Players</h4>
      </Slink>
    </List>
  );
}
const List = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 2rem 0rem;
`;
const Slink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 2rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    position: absolute;
    // top: 1.5rem;
    color: white;
    font-size: 0.8rem;
  }
  svg {
    color: white;
    font-size: 1.5rem;
  }
  &.active {
    background: linear-gradient(to right, #c9d6ff, #e2e2e2);

    h4 {
      color: black;
    }
    svg {
      color: white;
    }
  }
`;

export default Nav;
