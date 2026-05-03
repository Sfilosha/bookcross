// src/screens/HomeScreen.tsx
import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import {} from 'react-native-safe-area-context';
import { EmptyState } from '@components/EmptyState/EmptyState';
import images from '@assets/images';
import BooksGrid from '@components/BooksGrid/BooksGrid';
import booksData from '@data/books.json';
import Header from '@components/Header/Header';
import { ScreenContainer } from '@layout/ScreenContainer';
import { Icon } from '@components/Icon/Icon';
import { palette } from '@theme/colors';
import { Button } from '@components/Button/Button';

const HomeScreen = () => {
  const books = booksData.items || [];
  // const hasBooks = books.length > 0;
  const hasBooks = false;

  return (
    <ScreenContainer>
      <Header
        title="My Library"
        suffix={
          <>
            <Button
              size="large"
              variant="tertiary"
              isIconButton={true}
              prefixName="slidersHorizontal"
            />
            <Button
              size="large"
              variant="tertiary"
              isIconButton={true}
              prefixName="magnifyingGlass"
            />
          </>
        }
      />
      {hasBooks ? (
        <BooksGrid books={books} />
      ) : (
        <View>
          <EmptyState
            title="It's nothing here"
            subtitle="Let's add first book"
            imagePath={images.empty.library}
            buttonText="Add a Book"
            onPress={() => console.log('Add book pressed')}
          />
        </View>
      )}
    </ScreenContainer>
  );
};

export default HomeScreen;
