import React, { useState } from 'react';
import axios from 'axios';
import {Flex, Button, Input, FormControl, Select, Text, Heading,
	
	FormErrorMessage,
	FormHelperText,
	FormLabel} from '@chakra-ui/react'

const Mood = () => {
  const [mood, setMood] = useState('');
  const [output, setOutput] = useState('');
  const moods = ["Happy", "Sad", "Angry", "Peaceful", "Anxious","Desperate"];

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(mood)
		if(!moods.includes(mood)) {
			setOutput("Please select a valid selection")
			return;
		  }
		  try {
			const response = await fetch("/api/mood", {
				method: "POST",
				headers: {
				  "Content-Type": "application/json",
				},
				body: JSON.stringify({ mood:mood}),
			  });
			  const data = await response.json();
			setOutput(data.result);
			console.log(data.result);
		  } catch (error) {
			console.log(error);
		  }
		}
	
	
	return (
	<Flex mt={10} direction="column">
		<Heading>How are you today?</Heading>
    <form onSubmit={handleSubmit}>
		<FormControl>
    <FormLabel >
      Mood
	  </FormLabel>
      <Select
        value={mood}
        onChange={e => setMood(e.target.value)}>
        <option value="" disabled>How Are you feeling today?</option>
        {moods.map((mood, index) => (
          <option key={index} value={mood}>{mood}</option>
        ))}
      </Select>
 

  
    <Button  type="submit" mt={20} colorScheme="orange">
		What is my verse for today?
    </Button>

      {
	  output && 
    <Flex >
      <Text> {output}</Text> 
    </Flex>
	  }
	  </FormControl>
    </form>
	</Flex>
		)
	
}

export default Mood;
