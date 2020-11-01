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
  height: 45vh;
`;
