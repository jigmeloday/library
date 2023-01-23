import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import { AuthFacade } from '../../facade-service/auth-facade';

export const CREDENTIAL_STATE_KEY = 'credential_key';

export interface CredentialStateInterface {
    currentToken: string
}

export const INITIAL_CREDENTIAL_VALUE: CredentialStateInterface = {
    currentToken: ''
};

export const userLogin = createAsyncThunk(
    'credential/userLogin',
    async ( payload:{ email: string, password: string }, thunkAPI ) => {
        const { data, error } = await AuthFacade.login(payload);
        if ( data ) {
            debugger
            return data;
        }
        if ( error ) {
            return thunkAPI.rejectWithValue( error.errors );
        }
    }
)

export const CREDENTIAL_STATE = createSlice({
    name: CREDENTIAL_STATE_KEY,
    initialState: INITIAL_CREDENTIAL_VALUE,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase('setTheme', (state, action) => {
                state.currentToken = '';
            });
    }
});

export const credentialReducer = CREDENTIAL_STATE.reducer;
export const getSharedState = ( rootState: any ): CredentialStateInterface => rootState[CREDENTIAL_STATE_KEY];
export const selectToken = createSelector(getSharedState, state => state.currentToken );
