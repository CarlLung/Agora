import {
    ChakraProvider,
    Select,
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    Stack,
    Textarea,
    useColorModeValue,
    VStack,
    Text,
} from '@chakra-ui/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import Fonts from '../../components/layout/Fonts'
import { TriangleDownIcon } from '@chakra-ui/icons'
import theme from '../../styles/GlobalFont'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

type Post = { title: string; postContent: string; tag: string }

const AskQuestion = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Post>()
    const router = useRouter()

    const [posts, setPosts] = useState([])
    const [users, setUsers] = useState<any[]>([])

    console.log('users', users)

    useEffect(() => {
        axios
            .get('http://localhost:8080/posts')
            .then(function (response) {
                // handle success
                setPosts(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error)
            })
            .finally(function () {
                // always executed
            })
    }, [])

    const onSubmit: SubmitHandler<Post> = (data) => {
        // axios
        //     .post(
        //         'http://localhost:8080/posts',
        //         {
        //             title: data.title,
        //             postContent: data.postContent,
        //             tag: data.tag,
        //         },
        //         {
        //             headers: {
        //                 'Content-Type': 'application/json',
        //                 Authorization: `Bearer ${localStorage.getItem(
        //                     'token'
        //                 )}`,
        //             },
        //         }
        //     )
        //     .then(function (response) {
        //         console.log(response)
        //         alert('success')
        //         router.push('/')
        //     })
        //     .catch(function (error) {
        //         console.log(error)
        //         alert('failed')
        //         router.push('/')
        //     })

        fetch('http://localhost:8080/register', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('fetch data', data)
            })

        axios
            .get('http://localhost:8080/register', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })
            .then(function (response) {
                console.log(response.data.data)
                alert('success')
                setUsers(response.data.data)
                return response.data.data
                // router.push('/')
            })
            .catch(function (error) {
                console.log(error)
                alert('failed')
                // router.push('/')
            })
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
                                        Ask our community
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
                                                            Post Title
                                                        </Text>
                                                    </FormLabel>

                                                    <InputGroup>
                                                        <Input
                                                            type="text"
                                                            variant="outline"
                                                            placeholder="Enter post title"
                                                            _placeholder={{
                                                                background:
                                                                    'transparent',
                                                            }}
                                                            borderColor="rgba(0,0,0,0.3)"
                                                            {...register(
                                                                'title'
                                                            )}
                                                        />
                                                    </InputGroup>
                                                </FormControl>

                                                <FormControl>
                                                    <FormLabel>
                                                        <Text as="b">
                                                            Post Content
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
                                                            'postContent'
                                                        )}
                                                    />
                                                </FormControl>

                                                <FormControl>
                                                    <FormLabel>
                                                        <Text as="b">Tags</Text>
                                                    </FormLabel>

                                                    <InputGroup>
                                                        <Select
                                                            placeholder="Select option"
                                                            variant="outline"
                                                            _placeholder={{
                                                                background:
                                                                    'rgba(226,232,240,0.6)',
                                                            }}
                                                            borderColor="rgba(0,0,0,0.2)"
                                                            icon={
                                                                <TriangleDownIcon />
                                                            }
                                                            {...register('tag')}
                                                        >
                                                            <option
                                                                style={{
                                                                    background:
                                                                        'rgba(226,232,240,0.6)',
                                                                }}
                                                                value="option1"
                                                            >
                                                                Option 1
                                                            </option>
                                                            <option
                                                                style={{
                                                                    background:
                                                                        'rgba(226,232,240,0.6)',
                                                                }}
                                                                value="option2"
                                                            >
                                                                Option 2
                                                            </option>
                                                            <option
                                                                style={{
                                                                    background:
                                                                        'rgba(226,232,240,0.6)',
                                                                }}
                                                                value="option3"
                                                            >
                                                                Option 3
                                                            </option>
                                                        </Select>
                                                    </InputGroup>
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
                                                    Post
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

export default AskQuestion
