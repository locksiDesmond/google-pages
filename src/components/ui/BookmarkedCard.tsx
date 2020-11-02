import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import OptionMenu, { Data } from './OptionMenu';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Flex } from '../../styles/styles';
import AddBookmarkDialog from './AddBookmarkDialog';
import AddIcon from '@material-ui/icons/Add';

export interface BookmarkProps extends Data {
  index: number;
}
const BookMarkedWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  border-radius: 7px;
  border: 1px solid transparent;
  transition: border 0.12s linear;
  cursor: pointer;
  padding: 1rem 0.4rem;
  row-gap: 0.5rem;
  button {
    opacity: 0;
    z-index: 0;
    position: absolute;
    right: 0.2rem;
  }
  &:hover {
    box-shadow: 0 0 15px 2px #2d2c2c1c;
    button {
      opacity: 1;
      z-index: 1;
    }
  }
`;
const IconWrapper = styled.div`
  display: flex;
  height: 3rem;
  width: 3rem;
  background-color: #eeeeee;
  align-items: center;
  border-radius: 50%;
  justify-content: center;
`;
const Title = styled.div`
  font-size: 0.8rem;
  white-space: nowrap;
  text-transform: capitalize;
`;
const BookmarkedCard: React.FC<BookmarkProps> = ({ name, url, index }) => {
  const [anchorEl, setAnchorEl] = useState<any>(null);
  const open = Boolean(anchorEl);

  const handleClick:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const [value, setValue] = useState<Data>({ name, url });
  const [type, setType] = useState<'update' | 'new'>('update');
  let InitialValue: Data = { name: '', url: '' };
  const [openDialog, setOpenDialog] = useState(false);
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    if (!name) {
      setType('new');
    } else {
      setType('update');
    }
  }, [name]);
  const handleAddBookmark = () => {
    if (type === 'new' && !openDialog) {
      setOpenDialog(true);
    }
  };
  return (
    <BookMarkedWrapper onClick={handleAddBookmark}>
      <Flex>
        <IconWrapper>
          {(url && (
            <img
              src={`https://s2.googleusercontent.com/s2/favicons?domain_url=${url}`}
              alt={name || 'website'}
            />
          )) || <AddIcon />}
        </IconWrapper>
        {name && (
          <IconButton
            aria-label="more"
            aria-controls="book-mark-option"
            aria-haspopup="true"
            onClick={handleClick}
            style={{ height: '1rem', width: '1rem' }}
          >
            <MoreVertIcon fontSize="small" />
          </IconButton>
        )}
      </Flex>
      <OptionMenu
        index={index}
        anchorEl={anchorEl}
        open={open}
        handleClick={() => setOpenDialog(!openDialog)}
        handleClose={handleClose}
      />
      <AddBookmarkDialog
        open={openDialog}
        handleClose={(e) => {
          setOpenDialog(false);
          handleClose();
        }}
        type={type}
        index={index}
        handleChange={(e) =>
          setValue({ ...value, [e.currentTarget.name]: e.currentTarget.value })
        }
        reset={() => setValue(InitialValue)}
        value={value}
        anchorEl={undefined}
      />

      <Title>{name || 'Add a shortcut'}</Title>
    </BookMarkedWrapper>
  );
};

export default BookmarkedCard;
