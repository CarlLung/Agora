import { ChakraProvider, Button, Link, Box, Flex } from '@chakra-ui/react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const HomePage = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:8080/users')
            .then(function (response) {
                // handle success
                setUsers(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error)
            })
            .finally(function () {
                // always executed
            })
    }, [])

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
        <ChakraProvider>
            <Box>
                <Flex mt={4} justify="center">
                    <Link href="./createPostForm">
                        <Button colorScheme="teal" size="lg">
                            Create Post
                        </Button>
                    </Link>
                    <Button
                        onClick={handleCreateUser}
                        colorScheme="teal"
                        size="lg"
                        marginLeft={2}
                    >
                        Create User
                    </Button>
                </Flex>
            </Box>
        </ChakraProvider>
    )
}

export default HomePage
