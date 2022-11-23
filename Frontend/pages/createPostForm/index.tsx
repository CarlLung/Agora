import React from "react";
import Head from "next/head";
import { useForm } from 'react-hook-form';
import { 
  ChakraProvider,
  Button,
  Select,
  Textarea,
  Input
} from "@chakra-ui/react";
import {
  TriangleDownIcon
} from '@chakra-ui/icons';
import NavBar from "../../components/layout/NavBar";

type Post = {title: string;mainContent: string;tag: string}

const createPostForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: Post) => {
    console.log(data);
  };

  return (
    <ChakraProvider>
      <Head>
        <title>Create Post</title>
        <meta name="description" content="Create Post" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <NavBar />
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label>Title</label>
          <Input {...register("title")} />
        </div>
        <div className="form-control">
          <label>Main Content</label>
          <Textarea {...register("mainContent")} />
        </div>
        <div className="form-control">
          <label>Tags</label>
          <Select placeholder='Select option' 
                  variant='outline'
                  icon={<TriangleDownIcon />}
                  {...register("tag")}>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
        </div>
        <div className="form-control">
          <label></label>
          <Button type="submit" colorScheme='teal' size='md'>Submit</Button>
        </div>
      </form>
    </div>
  </ChakraProvider>
  )
  };
  
  export default createPostForm;

