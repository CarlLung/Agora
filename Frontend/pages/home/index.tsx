import { ChakraProvider, Link, Box, Flex } from '@chakra-ui/react'
import theme from '../../styles/GlobalFont'
import Fonts from '../../components/layout/Fonts'
import BlueButton from '../../components/layout/Buttons'
import useUser from '../../redux/hook/useUser'

const HomePage = () => {
    const { user } = useUser()
    console.log(user)
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Box gridArea="1 / 1">
                <Flex mt={20} justify="center">
                    <Link href="./createPostForm">
                        <BlueButton
                            buttonText={'Post Questions'}
                            fontSize={'md'}
                            fontWeight={'500'}
                            h={'40px'}
                            w={'130px'}
                        />
                    </Link>
                </Flex>
            </Box>
        </ChakraProvider>
    )
}

export default HomePage
