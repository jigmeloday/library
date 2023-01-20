import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import { BookFacade } from '../../facade-service/book-facade';
import { GetBooks } from '../../model/book.model';

export const BOOK_STATE_KEY = 'book_key';

export interface BookStateInterface {
    books: GetBooks | undefined
}

export const INITIAL_BOOK_VALUE: BookStateInterface = {
    books: undefined
};

export const getBook = createAsyncThunk(
    'book/getBook',
    async ( payload:void, thunkAPI ) => {
        const { data, error } = await BookFacade.getBooks();
        if ( data ) {
            return data;
        }
        if ( error ) {
            return thunkAPI.rejectWithValue( error.errors );
        }
    }
)


export const BOOK_STATE = createSlice({
    name: BOOK_STATE_KEY,
    initialState: INITIAL_BOOK_VALUE,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getBook.fulfilled, (state, action) => {
                state.books = action.payload;
            });
    }
});

export const bookReducer = BOOK_STATE.reducer;
export const getSharedState = ( rootState: any ): BookStateInterface => rootState[BOOK_STATE_KEY];
export const selectBooks = createSelector(getSharedState, state => state.books );
