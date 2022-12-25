import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { store } from '../store'
import axios from 'axios'
import { camelizeKeys } from 'humps'

export interface User {
    jwtToken: string
}

export interface LoginInput {
    usernameOrEmail: string
    password: string
}

export interface AuthState {
    user: User | null
}

const initialState: AuthState = {
    user: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload
        },
        logout: (state) => {
            state.user = null
        },
    },
})

export const localLogin = createAsyncThunk(
    'auth/localLogin',
    async (input: LoginInput) => {
        const { usernameOrEmail, password } = input
        if (!usernameOrEmail || !password) return store.dispatch(logout())

        try {
            await axios
                .post(`${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/login`, {
                    usernameOrEmail,
                    password,
                })
                .then((res) => {
                    return camelizeKeys(res.data.data)
                })
                .then((data) => {
                    alert('Login success')
                    localStorage.setItem('token', data.jwtToken)
                    return store.dispatch(
                        login({
                            ...data,
                        })
                    )
                })
                .catch((err) => {
                    console.error(err)
                    return store.dispatch(logout())
                })
        } catch (err) {
            console.error(err)
        }
    }
)

export const handleTokenValidation = createAsyncThunk(
    'auth/handleTokenValidation',
    async () => {
        const token = localStorage.getItem('token')
        if (!token) return store.dispatch(logout())

        try {
            await axios
                .get(`${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/check`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            'token'
                        )}`,
                    },
                })
                .catch(() => {
                    localStorage.removeItem('token')
                    return store.dispatch(logout())
                })
        } catch (err) {
            console.error(err)
        }
    }
)

export const { login, logout } = authSlice.actions

export default authSlice.reducer
