import React, { createContext, useState, useEffect } from 'react';
import { Data } from './../components/ui/OptionMenu';
interface BookmarkContextProps {
  bookmarks: Array<Data>;
  updateBookmark: (e: number, arg: Data) => void;
  removeBookmark: (e: number) => void;
  addBookmark: (args: Data) => void;
}
export const BookmarkContext = createContext<BookmarkContextProps>({
  removeBookmark: () => null,
  bookmarks: [{ name: '', url: '' }],
  updateBookmark: () => null,
  addBookmark: () => null,
});
let stores = [{ name: 'locksi pages', url: 'https://locksipage.netlify.app/' }];
const BookmarkContextWrapper: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [items, setItems] = useState<Array<Data>>(stores);
  const updateBookmark: (e: number, arg: Data) => void = (e, args) => {
    const cloneItem = [...items];
    cloneItem.splice(e, 1, args);
    setItems([...cloneItem]);
  };
  const handleRemove: (e: any) => void = (e) => {
    const cloneItem = [...items];
    cloneItem.splice(e, 1);
    setItems([...cloneItem]);
  };
  const addBookmark: (arg: Data) => void = (args) => {
    setItems([...items, args]);
  };
  useEffect(() => {
    const persistedState: any = localStorage.getItem('bookmarks');
    const parsedState = JSON.parse(persistedState);
    setItems(parsedState || stores);
  }, []);
  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(items));
  }, [items]);

  return (
    <BookmarkContext.Provider
      value={{
        bookmarks: items,
        updateBookmark,
        removeBookmark: handleRemove,
        addBookmark,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};

export default BookmarkContextWrapper;
