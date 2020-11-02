import React, { useContext } from 'react';
import styled from 'styled-components';
import BookmarkedCard from './BookmarkedCard';
import { BookmarkContext } from './../../context/BookmarkContext';
import { Data } from './OptionMenu';
const BookMarkContainer = styled.div`
  display: grid;
  margin-top: 2rem;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  row-gap: 0.1rem;
  flex-direction: column;
`;
const Bookmarks = () => {
  const { bookmarks: items } = useContext(BookmarkContext);
  const array: Array<Data> = Array(10 - items.length).fill({ name: null });

  return (
    <BookMarkContainer>
      {[...items, ...array].map((_, i) => (
        <BookmarkedCard name={_.name} url={_.url} key={i} index={i} />
      ))}
    </BookMarkContainer>
  );
};

export default Bookmarks;
