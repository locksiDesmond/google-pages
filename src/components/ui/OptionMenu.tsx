import React, { useContext } from 'react';
import { Menu, MenuItem } from '@material-ui/core';
import styled from 'styled-components';
import { BookmarkContext } from './../../context/BookmarkContext';

export interface Data {
  name: string | undefined;
  url: string | undefined;
}
export interface Props {
  open: boolean;
  handleClose: (event: {}, reason?: 'backdropClick' | 'escapeKeyDown') => void;
  anchorEl: Element | ((element: Element) => Element) | null | undefined;
}
interface OptionProps extends Props {
  index: number;
  handleClick:
    | ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
    | undefined;
}
const MenuText = styled.div`
  font-size: 0.9rem;
`;

const OptionMenu: React.FC<OptionProps> = ({
  open,
  handleClose,
  anchorEl,
  handleClick,
  index,
}) => {
  const { removeBookmark } = useContext(BookmarkContext);

  const handleRemove: (e: any) => void = (e) => {
    handleClose(e);
    removeBookmark(index);
  };

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
      <MenuItem>
        <MenuText onClick={handleClick}>Edit shortcut</MenuText>
      </MenuItem>
      <MenuItem>
        <MenuText onClick={handleRemove}>Remove</MenuText>
      </MenuItem>
    </Menu>
  );
};

export default OptionMenu;
