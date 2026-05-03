// src/screens/CrossingScreen.tsx
import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
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

const CrossingScreen = () => {
  const insets = useSafeAreaInsets();
  const books = booksData.items || [];
  const hasBooks = books.length > 0;

  return (
    <ScrollView
      style={[
        styles.container,
        {
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <Header title="Profile" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CrossingScreen;
