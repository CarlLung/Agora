import { 
  ChakraProvider,
  Button
} from "@chakra-ui/react";

const HomePage = () => {
  return (
    <ChakraProvider>
    <Button colorScheme='teal' size='lg'>
    Create Post
  </Button>
  </ChakraProvider>
  )
  };
  
export default HomePage;
