import {
    ChakraProvider,
    Link,
    Box,
    Flex,
    Card,
    CardBody,
    Text,
    Image,
    Stack,
    Heading,
    CardFooter,
    Button,
} from '@chakra-ui/react'
import theme from '../../styles/GlobalFont'
import Fonts from '../../components/layout/Fonts'
import BlueButton from '../../components/layout/Buttons'
import useUser from '../../redux/hook/useUser'

const posts = [
    {
        id: 1,
        title: 'First Post',
        content: 'Hello',
    },
    {
        id: 2,
        title: 'Second Post',
        content: 'More text',
    },
    {
        id: 3,
        title: 'Third Post',
        content: 'Even more text',
    },
]

const HomePage = () => {
    const { user } = useUser()
    console.log(user)

    const handleUpdateComment = (id: number) => {
        alert(id)
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
                </Flex>
            </Box>
            {posts.map((post, index) => {
                return (
                    <Card
                        direction={{ base: 'column', sm: 'row' }}
                        overflow="hidden"
                        variant="outline"
                        key={index}
                    >
                        <Image
                            objectFit="cover"
                            maxW={{ base: '100%', sm: '200px' }}
                            src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                            alt="Caffe Latte"
                        />

                        <Stack>
                            <CardBody>
                                <Heading size="md">{post.title}</Heading>

                                <Text py="2">{post.content}</Text>
                            </CardBody>

                            <CardFooter>
                                <Button
                                    onClick={() => handleUpdateComment(post.id)}
                                    variant="solid"
                                    colorScheme="blue"
                                >
                                    我要留言
                                </Button>
                            </CardFooter>
                        </Stack>
                    </Card>
                )
            })}
        </ChakraProvider>
    )
}

export default HomePage
