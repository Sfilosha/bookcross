// TBD
import React from 'react';
import { FlatList, StyleSheet, View, ViewStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { GetNumColumns } from '@constants/GetNumColumns';
import BookCard from '@components/BookCard/BookCard';
import { Book } from '@api/bookService';

// COMPONENT PROPS
interface BooksGridProps {
  books: Book[];
  style?: ViewStyle;
  refreshing?: boolean;
  onRefresh?: () => void;
}

// MAIN FUNCTION
function BooksGrid({ books, style }: BooksGridProps) {
  const navigation = useNavigation<any>();
  const numColumns = GetNumColumns();

  const handlePress = (item: Book) => {
    navigation.navigate('Details', {
      id: item.id,
      title: item.title,
      author: item.author,
      coverImage: item.coverImage,
      publisher: item.publisher,
      isbn: item.isbn,
      isBooked: item.isBooked,
      createdAt: item.createdAt,
    });
  };

  return (
    <FlatList
      key={numColumns}
      data={books}
      keyExtractor={item => item.id}
      numColumns={numColumns}
      columnWrapperStyle={styles.row}
      contentContainerStyle={styles.container}
      style={style}
      renderItem={({ item }) => (
        <View
          style={[
            { width: `${100 / numColumns}%` as any, paddingHorizontal: 8 },
          ]}
        >
          <BookCard
            title={item.title}
            subtitle={item.author ?? 'Unknown Author'}
            imagePath={item.coverImage}
            status={item.isBooked}
            variant="vertical"
            onPress={() => handlePress(item)}
          />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  row: {
    justifyContent: 'flex-start',
    marginBottom: 32,
  },
});

export default BooksGrid;
