// src/screens/DetailsScreen.tsx
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';

import BookCoverThumbnail from '@components/BookCoverThumbnail/BookCoverThumbnail';
import { palette } from '@theme/colors';
import { TextStyles } from '@theme/typography';

type RootStackParamList = {
  Details: {
    id: string;
    title: string;
    coverImg?: string;
    author?: string;
  };
};

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

function DetailsScreen() {
  const route = useRoute<DetailsScreenRouteProp>();
  const { id, title, author, coverImg } = route.params;

  const imageSource = coverImg ? { uri: coverImg } : undefined;

  // TEMP DATA
  const testItem = {
    ISBN: '1231231231',
    description:
      'A fascinating journey through the world of books and discovery.',
    publisher: 'Classic Publishing',
    publishedDate: '2022',
    pageCount: '202',
    categories: ['Fiction'],
    // author: 'James Smith',
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.header}>
        <BookCoverThumbnail imagePath={imageSource} style={styles.cover} />
        <Text style={TextStyles.h1}>{title}</Text>
        <Text style={[TextStyles.bodyM, { color: palette.black.medium }]}>
          by {author}
        </Text>
        <Text style={TextStyles.bodyS}>ID: {id}</Text>
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={[TextStyles.bodyS, styles.caption]}>ISBN:</Text>
        <Text style={[TextStyles.bodyS, styles.detailBody]}>
          {testItem.ISBN}
        </Text>

        <Text style={[TextStyles.bodyS, styles.caption]}>About:</Text>
        <Text style={[TextStyles.bodyS, styles.detailBody]}>
          {testItem.description}
        </Text>

        <Text style={[TextStyles.bodyS, styles.caption]}>Publisher:</Text>
        <Text style={[TextStyles.bodyS, styles.detailBody]}>
          {testItem.publisher}
        </Text>

        <Text style={[TextStyles.bodyS, styles.caption]}>Published Date:</Text>
        <Text style={[TextStyles.bodyS, styles.detailBody]}>
          {testItem.publishedDate}
        </Text>

        <Text style={[TextStyles.bodyS, styles.caption]}>Pages:</Text>
        <Text style={[TextStyles.bodyS, styles.detailBody]}>
          {testItem.pageCount}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    backgroundColor: '#fff',
  },
  cover: {
    width: 160,
    height: 240,
    marginBottom: 24,
    borderRadius: 8,
    elevation: 5, // тінь для Android
    shadowColor: '#000', // тінь для iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  header: {
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  descriptionContainer: {
    width: '100%',
    maxWidth: 440,
    alignSelf: 'center',
  },
  caption: {
    color: palette.black.medium,
    marginBottom: 4,
    fontWeight: '600',
  },
  detailBody: {
    marginBottom: 20,
    lineHeight: 20,
  },
});

export default DetailsScreen;
