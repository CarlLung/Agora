import {
    ChakraProvider,
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    Stack,
    useColorModeValue,
    VStack,
    Text,
} from '@chakra-ui/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import Fonts from '../../components/layout/Fonts'
import theme from '../../styles/GlobalFont'
import { localLogin } from '../../redux/reducers/authReducer'
import { useAppDispatch } from '../../redux/hook'

type UserProfile = {
    usernameOrEmail: string
    password: string
}

const LoginForm = () => {
    const dispatch = useAppDispatch()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserProfile>()

    const onSubmit: SubmitHandler<UserProfile> = (data) => {
        dispatch(localLogin(data))
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
                                        Login
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
                                                            Username
                                                        </Text>
                                                    </FormLabel>

                                                    <InputGroup>
                                                        <Input
                                                            type="text"
                                                            variant="outline"
                                                            placeholder="Enter Username/ Email"
                                                            _placeholder={{
                                                                background:
                                                                'transparent',
                                                            }}
                                                            borderColor="rgba(0,0,0,0.3)"
                                                            errorBorderColor="red.300"
                                                            {...register(
                                                                'usernameOrEmail',
                                                                {
                                                                    required:
                                                                        true,
                                                                }
                                                            )}
                                                        />
                                                    </InputGroup>
                                                    <Text
                                                        color="red.300"
                                                        fontSize="14px"
                                                    >
                                                        {errors.usernameOrEmail &&
                                                            'Username is required'}
                                                    </Text>
                                                </FormControl>

                                                <FormControl>
                                                    <FormLabel>
                                                        <Text as="b">
                                                            Password
                                                        </Text>
                                                    </FormLabel>

                                                    <InputGroup>
                                                        <Input
                                                            type="password"
                                                            variant="outline"
                                                            placeholder="Enter Password"
                                                            _placeholder={{
                                                                background:
                                                                'transparent',
                                                            }}
                                                            borderColor="rgba(0,0,0,0.3)"
                                                            errorBorderColor="red.300"
                                                            {...register(
                                                                'password',
                                                                {
                                                                    required:
                                                                        true,
                                                                }
                                                            )}
                                                        />
                                                    </InputGroup>
                                                    <Text
                                                        color="red.300"
                                                        fontSize="14px"
                                                    >
                                                        {errors.password &&
                                                            'Password is required'}
                                                    </Text>
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
                                                    Login
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

export default LoginForm
