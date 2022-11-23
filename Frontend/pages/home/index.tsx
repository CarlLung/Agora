import { 
  ChakraProvider,
  Button,
  Link,
  Box,
  Flex
} from "@chakra-ui/react";

const HomePage = () => {
  return (
    <ChakraProvider>
      <Box>
        <Flex mt={4} justify="center">
      <Link href='./createPostForm'>
    <Button colorScheme='teal' size='lg'>
    Create Post
  </Button>
  </Link>
  </Flex>
  </Box>
  </ChakraProvider>
  )
  };
  
export default HomePage;
