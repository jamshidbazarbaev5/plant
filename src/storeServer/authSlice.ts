import { createSlice } from '@reduxjs/toolkit';
import { postUserRegistration } from './register';

interface AuthState {
    user: any | null;
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(postUserRegistration.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(postUserRegistration.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.isAuthenticated = true;
            })
            .addCase(postUserRegistration.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Registration failed';
            });
    },
});

export const { clearError } = authSlice.actions;
export const authReducer = authSlice.reducer;
