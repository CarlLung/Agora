import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import HomePage from './home'
import NavBar from '../components/layout/NavBar'
// import Link from "next/link";
import Layout from '../components/layout/Layout'

export default function Home() {
    return (
        <ChakraProvider>
            <Head>
                <title>Hello KK</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/images/logosq.png" />
                <link
                    href="https://fonts.cdnfonts.com/css/anaphora-trial"
                    rel="stylesheet"
                />
            </Head>
            <Layout>
                <NavBar />

                {/* <Link href="/admin">Admin</Link> */}
                <HomePage />
            </Layout>
        </ChakraProvider>
    )
}
