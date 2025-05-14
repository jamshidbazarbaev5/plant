export interface RegisterResponse {
    username: string;
    first_name: string;
    last_name: string;
    password: string;
    password2: string;
}

export interface LoginResponse {
    access: string;
    refresh: string;   
}

export interface RefreshTokenResponse {
    access: string;
}

export interface GetMeResponse {
    id: number
    username: string
    first_name: string
    last_name: string 
}


export interface RegisterRequest {
    username: string;
    first_name: string;
    last_name: string;
    password: string;
    password2: string;
}

export interface LoginRequest {
    username: string;
    password: string;
}

