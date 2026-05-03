// src/screens/CrossingScreen.tsx
import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { EmptyState } from '@components/EmptyState/EmptyState';
import images from '@assets/images';
import BooksGrid from '@components/BooksGrid/BooksGrid';
import booksData from '@data/books.json';
import Header from '@components/Header/Header';
import { ScreenContainer } from '@layout/ScreenContainer';
import { useNavigation } from '@react-navigation/native';
import { useBooks } from '@hooks/useBooks';
import { palette } from '@theme/colors';

const CrossingScreen = () => {
  const { books, isLoading, isRefreshing, refresh } = useBooks();
  const bookedBooks = books.filter(book => book.isBooked === true);
  const hasBooks = bookedBooks.length > 0;
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

  return (
    <ScreenContainer>
      <Header title="Crossing" />
      {hasBooks ? (
        <BooksGrid
          books={bookedBooks}
          refreshing={isRefreshing}
          onRefresh={refresh}
        />
      ) : (
        <View>
          <EmptyState
            title="All books are on their places"
            subtitle="Track books you lended to someone."
            imagePath={images.empty.library}
            buttonText="Lend a Book"
            onPress={() => handleAddBook()}
          />
        </View>
      )}
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CrossingScreen;
