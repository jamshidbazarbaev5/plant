import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface RegisterData {
    username: string;
    password: string;
    password2: string;
    first_name: string;
    last_name: string;
}

export const postUserRegistration = createAsyncThunk(
    'auth/register',
    async (data: RegisterData) => {
        try {
            const response = await axios.post('/api/auth/register', data);
            return response.data;
        } catch (error: any) {
            throw new Error(error.response?.data?.message || 'Registration failed');
        }
    }
);
