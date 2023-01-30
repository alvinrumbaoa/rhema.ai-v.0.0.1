import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { FormControl, FormLabel, Input, Button, Box } from "@chakra-ui/react";


const SignUp = () => {
	const [form, setForm] = useState({
		username: '',
		email: '',
		password:'',
	})
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) =>{
	setForm({
		...form,
		[e.target.name]: e.target.value
	})

}

console.log(form)
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

		axios.post('http://localhost:3000/api/signup/' ,{
			...form
		})
		 
		 .then((res) => {
			if(res.data.errors) {
				console.log(res.data.errors)
			}
			else {
				console.log(res.data)
				router.push('/dashboard')
			}
		})
		.catch((err) => {
			console.log(err);
		})
	}
  return (
    <Box p={5}>
      <form onSubmit={handleSubmit}>
	  	<FormControl>
          <FormLabel htmlFor="username">User Name</FormLabel>
          <Input
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
          />
        </FormControl>
        <Button mt={4} type="submit">
          Sign Up
        </Button>
      </form>
    </Box>
  );
  }

export default SignUp;


