import React from 'react'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../../styles/GlobalFont'
import RegisterForm from '../../components/auth/register'
import Layout, { BgImg } from '../../components/layout/Layout'
import NavBar from '../../components/layout/NavBar'

export default function Register() {
    return (
        <ChakraProvider theme={theme}>
            <Head>
                <title>Register</title>
                <meta name="description" content="Register" />
                <link rel="icon" href="/images/logosq.png" />
            </Head>
            
            <Layout>
                <BgImg />
                <NavBar />
                <RegisterForm />
            </Layout>
            
         </ChakraProvider>
    )
}
