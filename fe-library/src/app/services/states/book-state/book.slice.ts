import { createSelector, createSlice } from '@reduxjs/toolkit';
import { GetBooks } from '../../model/book.model';

export const BOOK_STATE_KEY = 'credential_key';

export interface BookStateInterface {
    books: GetBooks | null
}

export const INITIAL_BOOK_VALUE: BookStateInterface = {
    books: null
};

export const BOOK_STATE = createSlice({
    name: BOOK_STATE_KEY,
    initialState: INITIAL_BOOK_VALUE,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase('setTheme', (state, action) => {
                state.books = null;
            });
    }
});

export const bookReducer = BOOK_STATE.reducer;
export const getSharedState = ( rootState: any ): BookStateInterface => rootState[BOOK_STATE_KEY];
export const selectToken = createSelector(getSharedState, state => state.books );
