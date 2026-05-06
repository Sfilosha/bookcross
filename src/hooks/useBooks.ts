import { useState, useEffect, useCallback } from 'react';
import { Book, bookService } from '@api/bookService';

export const useBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadBooks = useCallback(async (showRefreshing = false) => {
    if (showRefreshing) {
      setIsRefreshing(true);
    } else {
      setIsLoading(true);
    }

    setError(null);

    try {
      const data = await bookService.getAllBooks();
      setBooks(data);
    } catch (err) {
      setError('Не вдалося завантажити книги. Спробуйте пізніше.');
      console.error('Fetch error:', err);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  }, []);

  useEffect(() => {
    loadBooks();
  }, [loadBooks]);

  return {
    books,
    isLoading,
    isRefreshing,
    error,
    refresh: () => loadBooks(true),
    reload: () => loadBooks(false),
  };
};
