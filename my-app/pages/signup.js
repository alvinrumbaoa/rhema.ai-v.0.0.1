import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	Button,
	useToast,
  } from "@chakra-ui/core";
  import { useState } from "react";
  import { useRouter } from "next/router";
  import mongoose from "mongoose";
  
  const Signup = () => {
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const toast = useToast();
  
	const handleSubmit = async (e) => {
	  e.preventDefault();
  
	  // create a new user object
	  const user = new User({
		name: name,
		email: email,
		password: password,
	  });
  
	  try {
		// save the user to the database
		await user.save();
		// redirect to the dashboard
		router.push("/dashboard");
		toast({
		  title: "Signed up successfully.",
		  status: "success",
		  duration: 9000,
		  isClosable: true,
		});
	  } catch (err) {
		toast({
		  title: "An error occurred. Please try again.",
		  status: "error",
		  duration: 9000,
		  isClosable: true,
		});
	  }
	};
  
	return (
	  <Flex justifyContent="center" alignItems="center" height="100vh">
		<Box
		  as="form"
		  onSubmit={handleSubmit}
		  p={5}
		  bg="white"
		  rounded="md"
		  boxShadow="lg"
		>
		  <FormControl>
			<FormLabel htmlFor="name">Name</FormLabel>
			<Input
			  type="text"
			  id="name"
			  aria-describedby="name-helper-text"
			  value={name}
			  onChange={(e) => setName(e.target.value)}
			  />
			  </FormControl>
			  
			  <FormControl>
      <FormLabel htmlFor="email">Email</FormLabel>
      <Input
        type="email"
        id="email"
        aria-describedby="email-helper-text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </FormControl>

    <FormControl mt={4}>
      <FormLabel htmlFor="password">Password</FormLabel>
      <Input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </FormControl>

    <Button
      mt={4}
      variantColor="teal"
      type="submit"
    >
      Sign up
    </Button>
  </Box>
</Flex>
);
};			  

export default Signup;	