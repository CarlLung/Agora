import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { store } from '../store'
import axios from 'axios'

export interface User {
    id: string
    username: string
    email: string
    token: string
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
                    return store.dispatch(
                        login({
                            ...res.data.data,
                        })
                    )
                })
                .catch(() => {
                    return store.dispatch(logout())
                })
        } catch (err) {
            console.log(err)
        }
    }
)

export const localLoginThunk = async (input: LoginInput) =>
    await store.dispatch(localLogin(input))

export const { login, logout } = authSlice.actions

export default authSlice.reducer
