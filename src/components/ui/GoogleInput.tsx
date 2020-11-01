import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Input } from '../../styles/styles';
interface GoogleInputProps {
  open: boolean;
}
const GoogleInputWrapper = styled.div<GoogleInputProps>`
  background-color: #fff;
  width: -webkit-fill-available;
  width: -moz-available;
  display: flex;
  border: 1px solid #eee;
  align-items: flex-start;
  ${(props) =>
    props.open
      ? css`
          height: 45vh;
          border-radius: 1rem;
          transition-property: height border-radius;
          transition-duration: 0.2s;
          transition-timing-function: linear;
        `
      : css`
          height: 3rem;
          border-radius: 2rem;
          transition-property: height border-radius;
          transition-duration: 0.2s;
          transition-timing-function: linear;
        `};
`;
const GoogleInputContainer = styled.div`
  width: -webkit-fill-available;
  width: -moz-available;
  display: flex;
  align-items: center;
  height: 3rem;
  padding: 0 1rem;
  column-gap: 1rem;
`;
const GoogleInput = () => {
  const [open, setOpen] = useState(false);
  return (
    <GoogleInputWrapper open={open}>
      <GoogleInputContainer>
        <span>S</span>
        <Input
          placeholder="Search Google or type a URL"
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
        />
        <span>I</span>
      </GoogleInputContainer>
    </GoogleInputWrapper>
  );
};

export default GoogleInput;
