import {
    ChakraProvider,
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Stack,
    Textarea,
    useColorModeValue,
    VStack,
    Text,
} from '@chakra-ui/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import Fonts from '../../components/layout/Fonts'
import theme from '../../styles/GlobalFont'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

type Comment = { commentText: string; }

const ReplyPost = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Comment>()
    const router = useRouter()

    const [comments, setComments] = useState([])
    const [users, setUsers] = useState<any[]>([])

    console.log('users', users)

    useEffect(() => {
        axios
            .get('http://localhost:8080/posts')
            .then(function (response) {
                // handle success
                setComments(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error)
            })
            .finally(function () {
                // always executed
            })
    }, [])

    const onSubmit: SubmitHandler<Comment> = (data) => {
        axios
            .post(
                'http://localhost:8080/comments',
                {
                    
                    commentText: data.commentText,
                   
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem(
                            'token'
                        )}`,
                    },
                }
            )
            .then(function (response) {
                console.log(response)
                alert('You\'ve commented on the post')
                router.push('/')
            })
            .catch(function (error) {
                console.log(error)
                alert('failed')
                router.push('/')
            })

        // fetch('http://localhost:8080/register', {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         Authorization: `Bearer ${localStorage.getItem('token')}`,
        //     },
        // })
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log('fetch data', data)
        //     })

        // axios
        //     .get('http://localhost:8080/register', {
        //         headers: {
        //             'Content-Type': 'application/json',
        //             Authorization: `Bearer ${localStorage.getItem('token')}`,
        //         },
        //     })
        //     .then(function (response) {
        //         console.log(response.data.data)
        //         alert('success')
        //         setUsers(response.data.data)
        //         return response.data.data
        //         // router.push('/')
        //     })
        //     .catch(function (error) {
        //         console.log(error)
        //         alert('failed')
        //         // router.push('/')
        //     })
    }

    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Box gridArea="1 / 1">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Flex mt={20} align="center" justify="center">
                        <Box
                            borderRadius="lg"
                            m={{ base: 5, md: 3, lg: 5 }}
                            p={{ base: 5, lg: 4 }}
                        >
                            <Box>
                                <VStack spacing={{ base: 4, md: 8, lg: 9 }}>
                                    <Text
                                        fontSize={{
                                            base: 'xl',
                                            md: '3xl',
                                        }}
                                        fontWeight="900"
                                    >
                                        Reply Post
                                    </Text>

                                    <Stack
                                        spacing={{ base: 4, md: 8, lg: 20 }}
                                        direction={{
                                            base: 'column',
                                            md: 'row',
                                        }}
                                    >
                                        <Box
                                            bg={useColorModeValue(
                                                'rgba(255,255,255,0.7)',
                                                'gray.700'
                                            )}
                                            borderRadius="lg"
                                            w="1000px"
                                            p={{ base: 10, md: 8, lg: 10 }}
                                            color={useColorModeValue(
                                                'gray.700',
                                                'whiteAlpha.900'
                                            )}
                                            shadow="base"
                                        >
                                            <VStack spacing={5}>
                                                

                                                <FormControl>
                                                    <FormLabel>
                                                        <Text as="b">
                                                            Comment
                                                        </Text>
                                                    </FormLabel>

                                                    <Textarea
                                                        variant="outline"
                                                        _placeholder={{
                                                            background:
                                                                'transparent',
                                                        }}
                                                        borderColor="rgba(0,0,0,0.3)"
                                                        placeholder="Enter your post content ..."
                                                        rows={10}
                                                        resize="none"
                                                        {...register(
                                                            'commentText'
                                                        )}
                                                    />
                                                </FormControl>

                                                
                                                <Button
                                                    type="submit"
                                                    colorScheme="blue"
                                                    bg="blue.400"
                                                    color="white"
                                                    _hover={{
                                                        bg: 'blue.500',
                                                    }}
                                                    width="60%"
                                                >
                                                    Post Comment
                                                </Button>
                                            </VStack>
                                        </Box>
                                    </Stack>
                                </VStack>
                            </Box>
                        </Box>
                    </Flex>
                </form>
            </Box>
        </ChakraProvider>
    )
}

export default ReplyPost
