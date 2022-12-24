import React from 'react'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../../styles/GlobalFont'
import AskQuestion from '../../components/askQuestions/AskQuestions'
import Layout, { BgImg } from '../../components/layout/Layout'
import NavBar from '../../components/layout/NavBar'

export default function CreatePostForm() {
    return (
        <ChakraProvider theme={theme}>
            <Head>
                <title>Create Post</title>
                <meta name="description" content="Create Post" />
                <link rel="icon" href="/images/logosq.png" />
            </Head>

            <Layout>
                <BgImg />
                <NavBar />
                <AskQuestion />
            </Layout>
        </ChakraProvider>
    )
}
