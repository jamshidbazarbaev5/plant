import axios from "axios"
import type { GetMeResponse, LoginRequest, LoginResponse, RefreshTokenResponse, RegisterRequest, RegisterResponse } from "../types/types"


const baseURL = 'https://agroai.social'

export const registration = async (credentials: RegisterRequest) => {
    try {
        const response = await axios.post<RegisterResponse>(`${baseURL}/api/users`, credentials)
        return response.data
    }
    catch(error) {
        console.error(error);
    }
}

export const login = async (credentials: LoginRequest) => {
    const response = await axios.post<LoginResponse>(`${baseURL}/api/users/token/`, credentials)        
    return response.data
}

export const refreshToken = async () => {
    const token = localStorage.getItem("refresh")
    if(token) {
        try {
            const response = await axios.post<RefreshTokenResponse>(`${baseURL}/api/token/refresh`, {
                refresh: token
            })
            return response.data
        }
        catch (error) {
            console.error(error);
        }
    }
}

export const getMe = async () => {
    const token = localStorage.getItem("access")
    if(token) {
        try {
            const response = await axios.get<GetMeResponse>(`${baseURL}/api/users/me`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            
            return response.data
        }
        catch (error) {
            console.error(error);
        }
    }

}


