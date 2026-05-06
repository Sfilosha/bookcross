import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';

import BookCoverThumbnail from '@components/BookCoverThumbnail/BookCoverThumbnail';
import { palette } from '@theme/colors';
import { TextStyles } from '@theme/typography';
import { Book } from '@api/bookService';

type RootStackParamList = {
  Details: Book;
};

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

function DetailsScreen() {
  const route = useRoute<DetailsScreenRouteProp>();
  const { id, title, author, coverImage, isbn, publisher, createdAt } =
    route.params;

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.header}>
        <BookCoverThumbnail imagePath={coverImage} style={styles.cover} />
        <Text style={TextStyles.h1}>{title}</Text>
        <Text style={[TextStyles.bodyM, { color: palette.black.medium }]}>
          by {author}
        </Text>
        <Text style={TextStyles.bodyS}>ID: {id}</Text>
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={[TextStyles.bodyS, styles.caption]}>ISBN:</Text>
        <Text style={[TextStyles.bodyS, styles.detailBody]}>{isbn}</Text>

        <Text style={[TextStyles.bodyS, styles.caption]}>About:</Text>
        <Text style={[TextStyles.bodyS, styles.detailBody]}>
          Temporary description....
        </Text>

        <Text style={[TextStyles.bodyS, styles.caption]}>Publisher:</Text>
        <Text style={[TextStyles.bodyS, styles.detailBody]}>{publisher}</Text>

        <Text style={[TextStyles.bodyS, styles.caption]}>Creation Date:</Text>
        <Text style={[TextStyles.bodyS, styles.detailBody]}>{createdAt}</Text>

        <Text style={[TextStyles.bodyS, styles.caption]}>Pages:</Text>
        <Text style={[TextStyles.bodyS, styles.detailBody]}>201 pages</Text>
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
