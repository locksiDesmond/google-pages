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
`;
const Header = () => {
  // https://www.google.com.ng/intl/en/about/products?tab=rh
  return (
    <Nav>
      <NavItemWrapper>
        <NavItem>Google</NavItem>
        <NavItem>Images</NavItem>
        <NavItem>
          <AppsIcon />
        </NavItem>
      </NavItemWrapper>
    </Nav>
  );
};

export default Header;
