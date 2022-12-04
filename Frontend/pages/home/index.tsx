import { ChakraProvider, Link, Box, Flex } from '@chakra-ui/react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import theme from '../../styles/GlobalFont'
import Fonts from '../../components/layout/Fonts'
import BlueButton from '../../components/layout/Buttons'

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
        <ChakraProvider theme={theme}>
            <Fonts />
            <Box gridArea = "1 / 1">
                <Flex mt={20} justify="center">
                    <Link href="./createPostForm">
                        <BlueButton 
                           buttonText={"Post Questions"}
                           fontSize={"md"}
                           fontWeight={"500"}
                           h={"40px"}
                           w={"130px"}
                          
                           />
                    </Link>

                    <BlueButton 
                           buttonText={"Create User"}
                           onClick={handleCreateUser}
                           fontSize={"md"}
                           fontWeight={"500"}
                           h={"40px"}
                           w={"130px"} 
                           marginLeft={"10px"}
                           />
                    
                </Flex>
            </Box>
        </ChakraProvider>
    )
}

export default HomePage
