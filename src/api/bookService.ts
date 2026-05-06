import apiClient from './client';

export interface Book {
  id: number;
  title: string;
  author: string;
  isbn?: string;
  publisher?: string;
  coverImage?: string;
  createdAt?: string;
  isBooked?: boolean;
}

export const bookService = {
  // Get All Books
  /**
   * GET /books
   * Get list of all books
   */
  getAllBooks: async () => {
    const response = await apiClient.get<Book[]>('/booksss');
    return response.data;
  },

  /**
   * GET /books/:id
   * Get book details by ID
   */
  getBookById: async (id: string) => {
    const response = await apiClient.get<Book>(`/books/${id}`);
    return response.data;
  },

  /**
   * POST /books
   * Створити нову книгу
   */
  addBook: async (bookData: Omit<Book, 'id' | 'createdAt'>) => {
    const response = await apiClient.post<Book>('/books', bookData);
    return response.data;
  },

  /**
   * PUT /books/:id
   * Completely Re-Write Book Data
   */
  updateBook: async (id: string, bookData: Partial<Book>) => {
    const response = await apiClient.put<Book>(`/books/${id}`, bookData);
    return response.data;
  },

  /**
   * DELETE /books/:id
   * Delete Book from Database
   */
  deleteBook: async (id: string) => {
    const response = await apiClient.delete<void>(`/books/${id}`);
    return response.data;
  },
};
