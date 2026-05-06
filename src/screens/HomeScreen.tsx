import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import {} from 'react-native-safe-area-context';
import { EmptyState } from '@components/EmptyState/EmptyState';
import images from '@assets/images';
import BooksGrid from '@components/BooksGrid/BooksGrid';
import Header from '@components/Header/Header';
import { ScreenContainer } from '@layout/ScreenContainer';
import { Button } from '@components/Button/Button';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';
import { palette } from '@theme/colors';
import { useBooks } from '@hooks/useBooks';
import ErrorState from '@components/ErrorState/ErrorState';

const HomeScreen = () => {
  const { books, isLoading, isRefreshing, refresh, error } = useBooks();
  const hasBooks = books.length > 0;
  // const hasBooks = false;
  const navigation = useNavigation<any>();

  const handleAddBook = () => {
    navigation.navigate('Add Book', {});
  };

  if (isLoading && !isRefreshing) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={palette.success.dark} />
      </View>
    );
  }

  if (error) {
    return <ErrorState errorMessage={error} onRefresh={refresh} />;
  }

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
      {hasBooks && !error ? (
        <BooksGrid
          books={books}
          refreshing={isRefreshing}
          onRefresh={refresh}
        />
      ) : (
        <View>
          <EmptyState
            title="It's nothing here"
            subtitle="Let's add first book"
            imagePath={images.empty.scan}
            buttonText="Add a Book"
            onPress={() => handleAddBook()}
          />
        </View>
      )}
    </ScreenContainer>
  );
};

export default HomeScreen;
