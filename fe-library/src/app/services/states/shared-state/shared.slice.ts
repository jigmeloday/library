import { createSelector, createSlice } from '@reduxjs/toolkit';
import { setMenu, setTheme } from './shared.action';

export const SHARED_STATE_KEY = 'shared_key';

export interface SharedStateInterface {
    currentTheme: string
    setMenu: any
}

export const INITIAL_SHARED_VALUE: SharedStateInterface = {
    currentTheme: 'light',
    setMenu: null
};

export const SHARED_SLICE = createSlice({
    name: SHARED_STATE_KEY,
    initialState: INITIAL_SHARED_VALUE,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(setTheme, (state, action) => {
                state.currentTheme = action.payload;
            })
            .addCase(setMenu, (state, action) => {
                state.setMenu = action.payload;
            })
        ;
    }
});

export const sharedReducer = SHARED_SLICE.reducer;
export const getSharedState = ( rootState: any ): SharedStateInterface => rootState[SHARED_STATE_KEY];
export const selectCurrentTheme = createSelector(getSharedState, state => state.currentTheme );
export const selectMenu = createSelector(getSharedState, state => state.setMenu );
