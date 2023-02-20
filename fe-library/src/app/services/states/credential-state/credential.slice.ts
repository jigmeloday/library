import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import { AuthFacade } from '../../facade-service/auth-facade';
import { clearToken } from './credential.action';

export const CREDENTIAL_STATE_KEY = 'credential_key';

export interface CredentialStateInterface {
    currentToken: string
    currentUser: any
    currentUpdateState: boolean
}

export const INITIAL_CREDENTIAL_VALUE: CredentialStateInterface = {
    currentToken: '',
    currentUser: null,
    currentUpdateState: false
};

export const userLogin = createAsyncThunk(
    'credential/userLogin',
    async ( payload:{ email: string, password: string }, thunkAPI ) => {
        const { data, error } = await AuthFacade.login(payload);
        if ( data ) {
            return data;
        }
        if ( error ) {
            return thunkAPI.rejectWithValue( error.errors );
        }
    }
);

export const updateUser = createAsyncThunk(
    'credential/updateUser',
    async ( payload: any, thunkAPI ) => {
        const {data, error } = await AuthFacade.updateUser(payload.data, payload?.id);
        if ( data ) {
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
            .addCase(userLogin.fulfilled, (state, action) => {
                localStorage.setItem('token', action.payload.token);
                state.currentToken = action.payload.token;
                state.currentUser = action.payload.profile
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.currentUser = action.payload
                state.currentUpdateState = true
            })
            .addCase(updateUser.pending, (state, action) => {
                state.currentUpdateState = false
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.currentUpdateState = false
            })
            .addCase(clearToken, (state, action) => {
                state.currentToken = ''
            })
    }
});

export const credentialReducer = CREDENTIAL_STATE.reducer;
export const getSharedState = ( rootState: any ): CredentialStateInterface => rootState[CREDENTIAL_STATE_KEY];
export const selectToken = createSelector(getSharedState, state => state.currentToken );
export const selectCurrentUser = createSelector(getSharedState, state => state.currentUser );
export const selectUpdateState = createSelector(getSharedState, state => state.currentUpdateState)