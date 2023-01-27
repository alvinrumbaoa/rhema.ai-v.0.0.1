import {
	FormControl,
	FormLabel,
	Input,
	Button,
	useToast,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import axios from "axios";
  
  const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const toast = useToast();
  
	const handleSubmit = async (e) => {
	  e.preventDefault();
  
	  try {
		// send a post request to the /api/login route
		// with the email and password in the request body
		const { data } = await axios.post("/api/login", {
		  email: email,
		  password: password,
		});
  
		// check the response for a successful login
		if (data.success) {
		  toast({
			title: "Logged in successfully.",
			status: "success",
			duration: 9000,
			isClosable: true,
		  });
		} else {
		  toast({
			title: "Invalid email or password.",
			status: "error",
			duration: 9000,
			isClosable: true,
		  });
		}
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
			Login
		  </Button>
		</Box>
	  </Flex>
	);
  };
  
  export default Login;

  
  
  
  
  