// TBD
import React from 'react';
import { FlatList, StyleSheet, View, ViewStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { GetNumColumns } from '@constants/GetNumColumns';
import BookCard from '@components/BookCard/BookCard';

// Based on Google Books structure
interface BookItem {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    imageLinks?: {
      thumbnail: string;
    };
  };
}

// COMPONENT PROPS
interface BooksGridProps {
  books: BookItem[];
  style?: ViewStyle;
  onPress?: () => void;
}

// MAIN FUNCTION
function BooksGrid({ books, style }: BooksGridProps) {
  const navigation = useNavigation<any>();
  const numColumns = GetNumColumns();

  const handlePress = (item: BookItem) => {
    navigation.navigate('Details', {
      id: item.id,
      title: item.volumeInfo.title,
      author: item.volumeInfo.authors,
      coverImg: item.volumeInfo.imageLinks?.thumbnail,
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
            title={item.volumeInfo.title}
            subtitle={item.volumeInfo.authors?.join(', ') ?? 'Unknown Author'}
            imagePath={{ uri: item.volumeInfo.imageLinks?.thumbnail }}
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
