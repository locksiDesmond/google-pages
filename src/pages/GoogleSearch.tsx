import React from 'react';
import BookmarkContextWrapper from '../context/BookmarkContext';
import GoogleLayout from './../layout/GoogleLayout';

const GoogleSearch = () => {
  return (
    <BookmarkContextWrapper>
      <GoogleLayout />
    </BookmarkContextWrapper>
  );
};

export default GoogleSearch;
