import React, { useState } from 'react';
import styled from 'styled-components';
import OptionDialog from './OptionDialog';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export interface Props {
  title: string | null;
  icon?: string;
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
  &:hover {
    box-shadow: 0 0 15px 2px #2d2c2c1c;
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
const Flex = styled.div`
  display: flex;
`;

const BookmarkedCard: React.FC<Props> = ({ title, icon }) => {
  const [anchorEl, setAnchorEl] = useState<any>(null);
  const open = Boolean(anchorEl);

  const handleClick:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <BookMarkedWrapper>
      <Flex>
        <IconWrapper>{icon || 'I'}</IconWrapper>
        <IconButton
          aria-label="more"
          aria-controls="book-mark-option"
          aria-haspopup="true"
          onClick={handleClick}
          style={{ height: '1rem', width: '1rem' }}
        >
          <MoreVertIcon fontSize="small" />
        </IconButton>
      </Flex>
      <OptionDialog anchorEl={anchorEl} open={open} handleClose={handleClose} />
      <Title>{title || 'Add a shortcut'}</Title>
    </BookMarkedWrapper>
  );
};

export default BookmarkedCard;
