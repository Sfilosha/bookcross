// src/screens/HomeScreen.tsx
import React from 'react';
import { View } from 'react-native';
import {} from 'react-native-safe-area-context';
import { EmptyState } from '@components/EmptyState/EmptyState';
import images from '@assets/images';
import BooksGrid from '@components/BooksGrid/BooksGrid';
import booksData from '@data/books.json';
import Header from '@components/Header/Header';
import { ScreenContainer } from '@layout/ScreenContainer';
import { Button } from '@components/Button/Button';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const books = booksData.items || [];
  // const hasBooks = books.length > 0;
  const hasBooks = false;
  const navigation = useNavigation<any>();

  const handleAddBook = () => {
    navigation.navigate('Add Book', {});
  };

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
            onPress={() => handleAddBook()}
          />
        </View>
      )}
    </ScreenContainer>
  );
};

export default HomeScreen;
