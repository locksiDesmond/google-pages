import React from 'react';
import GoogleLayout from './layout/GoogleLayout';
import BookmarkContextWrapper from './context/BookmarkContext';

function App() {
  return (
    <BookmarkContextWrapper>
      <GoogleLayout></GoogleLayout>
    </BookmarkContextWrapper>
  );
}

export default App;
