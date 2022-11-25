import {
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

type Post = { title: string; postContent: string; tag: string }

const AskQuestion = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Post>()

    const onSubmit: SubmitHandler<Post> = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box display="grid">
                <Fonts />

                <Flex mt={20} align="center" justify="center" gridArea="1 / 1">
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
                                    direction={{ base: 'column', md: 'row' }}
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
                                                                'rgba(226,232,240,0.6)',
                                                        }}
                                                        borderColor="rgba(0,0,0,0.3)"
                                                        {...register('title')}
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
                                                            'rgba(226,232,240,0.6)',
                                                    }}
                                                    borderColor="rgba(0,0,0,0.3)"
                                                    placeholder="Enter your post content ..."
                                                    rows={10}
                                                    resize="none"
                                                    {...register('postContent')}
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
            </Box>
        </form>
    )
}

export default AskQuestion
