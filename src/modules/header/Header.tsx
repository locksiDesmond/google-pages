import React from 'react';
import styled from 'styled-components';
import AppsIcon from '@material-ui/icons/Apps';

const Nav = styled.nav`
  display: flex;
  padding-top: 1rem;
`;
const NavItemWrapper = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  margin-left: auto;
  margin-right: 0;
  padding-right: 1.5rem;
  list-style-type: none;
  column-gap: 1rem;
  align-items: center;
`;
const NavItem = styled.li`
  font-size: ;
  text-transform: capitalize;
  cursor: pointer;
  a {
    color: #000;
    text-decoration: none;
  }
`;
const Header = () => {
  return (
    <Nav>
      <NavItemWrapper>
        <NavItem onClick={() => alert('This is a google homepage website')}>
          Google
        </NavItem>
        <NavItem onClick={() => alert('Locksi forgot to add images')}>
          Images
        </NavItem>
        <NavItem
          onClick={() => alert("locksi's first typescript app. Excited!!")}
        >
          <AppsIcon />
        </NavItem>
      </NavItemWrapper>
    </Nav>
  );
};

export default Header;
