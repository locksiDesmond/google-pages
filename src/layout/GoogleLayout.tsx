import React from 'react';
import Header from './../modules/header/Header';
import { GlobalStyle } from './../styles/GlobalStyle';
import { SearchAndBookmarks, BodyWrapper, BigText } from './../styles/styles';
import GoogleInput from '../components/ui/GoogleInput';
import Bookmarks from '../components/ui/Bookmarks';

const GoogleLayout = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <BodyWrapper>
        <BigText>Google</BigText>
        <SearchAndBookmarks>
          <GoogleInput />
          <Bookmarks />
        </SearchAndBookmarks>
      </BodyWrapper>
    </>
  );
};

export default GoogleLayout;
