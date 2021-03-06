import styled from 'styled-components';
export const BodyWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '4rem',
});

export const BigText = styled.h1`
  font-size: 5.3rem;
  font-weight: 700;
  a {
    color: #000;
    text-decoration: none;
  }
`;
export const Input = styled.input`
  width: -webkit-fill-available;
  width: -moz-available;
  border: none;
  height: -webkit-fill-available;
  &:focus {
    outline: none;
  }
`;
export const SearchAndBookmarks = styled.div`
  width: 40vw;
  width: revert;
  height: 45vh;
`;
export const Flex = styled.div`
  display: flex;
`;
