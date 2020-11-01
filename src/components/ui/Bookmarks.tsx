import React from 'react';
import styled from 'styled-components';
import BookmarkedCard, { Props } from './BookmarkedCard';

const BookMarkContainer = styled.div`
  display: grid;
  margin-top: 2rem;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  row-gap: 0.1rem;
  flex-direction: column;
`;
const items: Array<Props> = [
  { title: 'react App' },
  { title: 'whatsapp' },
  { title: 'Inbox' },
  { title: 'Github' },
  { title: 'Youtube' },
  { title: 'Behance' },
  { title: 'Youtube' },
];
const array: Array<Props> = Array(10 - items.length).fill({ title: null });
const Bookmarks = () => {
  return (
    <BookMarkContainer>
      {[...items, ...array].map((_, i) => (
        <BookmarkedCard title={_.title} />
      ))}
    </BookMarkContainer>
  );
};

export default Bookmarks;
