import { Button } from '@components/Button/Button';
import { InputText } from '@components/InputText/InputText';
import { ScreenContainer } from '@layout/ScreenContainer';
import { palette } from '@theme/colors';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { bookService } from '@api/bookService';
import { useNavigation } from '@react-navigation/native';

function AddBookScreen() {
  const [title, setTitle] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');
  const [publisher, setPublisher] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation<any>();

  const isButtonDisabled = title.trim() === '' || author.trim() === '';

  const handleAddBook = async () => {
    setIsLoading(true);
    try {
      await bookService.addBook({
        title,
        author,
        isbn,
        publisher,
        coverImage,
        isBooked: false,
      });
      console.log('Книгу додано успішно!');
      navigation.goBack();
    } catch (error) {
      console.error('Error', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ScreenContainer>
        <ScrollView
          style={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          <InputText
            label="Title"
            placeholder="eg., Lord of The Rings"
            error={false}
            editable={true}
            value={title}
            onChangeText={setTitle}
          />
          <InputText
            label="Author"
            placeholder="eg., J. R. R. Tolkien"
            error={false}
            editable={true}
            value={author}
            onChangeText={setAuthor}
          />
          <InputText
            label="ISBN"
            placeholder="eg., 123141241245124"
            error={false}
            editable={true}
            value={isbn}
            onChangeText={setIsbn}
            keyboardType="numeric"
          />
          <InputText
            label="Publisher"
            placeholder="eg., Pinguin Books"
            error={false}
            editable={true}
            value={publisher}
            onChangeText={setPublisher}
          />
        </ScrollView>
      </ScreenContainer>
      <View style={styles.buttonContainer}>
        <Button
          variant="primary"
          fullWidth={true}
          onPress={handleAddBook}
          disabled={isButtonDisabled}
        >
          Add Book
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  buttonContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    elevation: 2,
    backgroundColor: palette.white.lightest,
    paddingBottom: 24,
    padding: 16,
  },
});

export default AddBookScreen;
