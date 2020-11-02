import { Dialog, TextField } from '@material-ui/core';
import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { Props, Data } from './OptionMenu';
import { Flex } from './../../styles/styles';
import { BookmarkContext } from './../../context/BookmarkContext';

interface BookmarkProps extends Props {
  handleChange: (event: any) => void;
  value: Data;
  reset: () => void;
  index: number;
  type: 'update' | 'new';
}
const AddBookmarkWrapper = styled.div`
  display: flex;
  padding: 2rem 1rem;
  width: 40vw;
  overflow: none;
  flex-direction: column;
  row-gap: 2rem;
`;
const BookmarkTitle = styled.h1`
  font-size: 1rem;
  font-weight: normal;
  text-align: center;
`;
const Button = styled.button`
  height: 35px;
  width: 3.8rem;
  border-radius: 4px;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  transition: all 0.2s linear;
  ${(props) =>
    props.theme === 'transparent'
      ? css`
          border: 1px solid #eee;
          color: blue;
          background-color: transparent;
          &:hover {
            background-color: #0000ee90;
          }
        `
      : css`
          border: 1px solid #eee;
          background-color: #00000ff00;
          &:hover {
            opacity: 0.8;
          }
        `}
`;
const AddBookmarkDialog: React.FC<BookmarkProps> = ({
  open,
  handleClose,
  handleChange,
  value,
  index,
  type,
  reset,
}) => {
  const { updateBookmark, addBookmark } = useContext(BookmarkContext);
  const handleSubmit: (e: any) => void = async (e) => {
    e.stopPropagation();
    handleClose(e);
    reset();
    if (type === 'update') {
      updateBookmark(index, value);
    } else {
      addBookmark(value);
    }
  };
  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="add-bookmark">
      <AddBookmarkWrapper>
        <BookmarkTitle>
          {type === 'update' ? 'Edit shortcut' : 'Add shortcut'}
        </BookmarkTitle>
        <TextField
          id="outlined-textarea"
          label="name"
          value={value.name}
          required
          placeholder="Placeholder"
          name="name"
          multiline
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          id="outlined-textarea"
          label="Url"
          value={value.url}
          required
          placeholder="Placeholder"
          multiline
          variant="outlined"
          name="url"
          onChange={handleChange}
        />
        <Flex
          style={{
            columnGap: '1rem',
            justifyContent: 'flex-end',
          }}
        >
          <Button theme="transparent" type="button" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} type="submit">
            Done
          </Button>
        </Flex>
      </AddBookmarkWrapper>
    </Dialog>
  );
};

export default AddBookmarkDialog;
