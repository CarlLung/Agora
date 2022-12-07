import { ChakraProvider, Link, Box, Flex } from '@chakra-ui/react'
import axios from 'axios'
import theme from '../../styles/GlobalFont'
import Fonts from '../../components/layout/Fonts'
import BlueButton from '../../components/layout/Buttons'
import { useQuery } from 'react-query'

type User = {
    email: string
    password: string
}

const HomePage = () => {
    const users = useQuery('users', async () => {
        const { data } = await axios.get('http://localhost:8080/users')
        return data.data
    })

    const handleCreateUser = () => {
        axios
            .post('http://localhost:8080/users', {
                email: 'byeYOurHead@bye.com',
                password: '1234997',
            })
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            })
    }
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

                    <BlueButton
                        buttonText={'Create User'}
                        onClick={handleCreateUser}
                        fontSize={'md'}
                        fontWeight={'500'}
                        h={'40px'}
                        w={'130px'}
                        marginLeft={'10px'}
                    />
                </Flex>

                <>
                    {users.isError ? (
                        'fucking error'
                    ) : (
                        <>
                            {users.isLoading ? (
                                <div>is loading</div>
                            ) : (
                                <div>
                                    {users.data.map(
                                        (user: User, key: number) => (
                                            <div key={key}>{user.email}</div>
                                        )
                                    )}
                                </div>
                            )}
                        </>
                    )}
                </>
            </Box>
        </ChakraProvider>
    )
}

export default HomePage
