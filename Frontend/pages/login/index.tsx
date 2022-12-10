import React from 'react'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../../styles/GlobalFont'
import LoginForm from '../../components/auth/login'
import Layout, { BgImg } from '../../components/layout/Layout'
import NavBar from '../../components/layout/NavBar'

export default function Login() {
    return (
        <ChakraProvider theme={theme}>
            <Head>
                <title>Login</title>
                <meta name="description" content="Login" />
                <link rel="icon" href="/images/logosq.png" />
            </Head>
            
            <Layout>
                <BgImg />
                <NavBar />
                <LoginForm />
            </Layout>
            
         </ChakraProvider>
    )
}
