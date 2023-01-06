import React from 'react'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../../styles/GlobalFont'
import ReplyPost from '../../components/replyPosts/ReplyPosts'
import Layout, { BgImg } from '../../components/layout/Layout'
import NavBar from '../../components/layout/NavBar'

export default function CreateReplyPost() {
    return (
        <ChakraProvider theme={theme}>
            <Head>
                <title>Reply Post</title>
                <meta name="description" content="Reply Post" />
                <link rel="icon" href="/images/logosq.png" />
            </Head>

            <Layout>
                <BgImg />
                <NavBar />
                <ReplyPost/>
            </Layout>
        </ChakraProvider>
    )
}
