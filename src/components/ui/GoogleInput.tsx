import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Input } from '../../styles/styles';
import MicIcon from '@material-ui/icons/Mic';
import SearchIcon from '@material-ui/icons/Search';
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
  position: absolute;
  width: 45vw;
  z-index: 3;
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
const GoogleInputContainer = styled.form`
  width: stretch;
  display: flex;
  align-items: center;
  height: 3rem;
  padding: 0 1rem;
  column-gap: 1rem;
`;
const GoogleInput = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void = (
    e
  ) => {
    e.preventDefault();
    window.open(`http://google.com/search?q=${value}`);
  };

  const handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void = (
    event
  ) => {
    try {
      window.history.pushState(
        {
          search: event.currentTarget.value,
        },
        'search',
        `http://localhost:3000/search/?s=${event.currentTarget.value}`
      );
    } catch (err) {
      console.log({ err });
    }
    setValue(event.currentTarget.value);
  };

  return (
    <GoogleInputWrapper open={open}>
      <GoogleInputContainer onSubmit={handleSubmit}>
        <SearchIcon />
        <Input
          placeholder="Search Google or type a URL"
          value={value}
          onChange={handleChange}
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
        />
        <MicIcon />
      </GoogleInputContainer>
    </GoogleInputWrapper>
  );
};

export default GoogleInput;
