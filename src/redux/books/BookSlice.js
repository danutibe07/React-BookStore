import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      id: Math.floor(Math.random() * 100),
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      state.books.push({
        id: payload.id,
        title: payload.title,
        author: payload.author,
      });
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.books.filter((book) => book.id !== bookId);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
