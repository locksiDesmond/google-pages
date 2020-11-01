import React from 'react';
import { Menu, MenuItem } from '@material-ui/core';
import styled from 'styled-components';

interface Props {
  open: boolean;
  handleClose: (event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void;
  anchorEl: Element | ((element: Element) => Element) | null | undefined;
}

const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;
const OptionDialog: React.FC<Props> = ({ open, handleClose, anchorEl }) => {
  return (
    <Menu
      open={open}
      id="book-mark-option"
      anchorEl={anchorEl}
      keepMounted
      onClose={handleClose}
      PaperProps={{
        style: {
          maxHeight: 48 * 4.5,
          width: '20ch',
        },
      }}
    >
      <OptionWrapper>Hey</OptionWrapper>
      <MenuItem>Hey</MenuItem>
    </Menu>
  );
};

export default OptionDialog;
