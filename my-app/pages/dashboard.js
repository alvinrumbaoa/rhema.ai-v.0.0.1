import React from 'react'
import Form from '../components/Form'
import Mood from '../components/Mood'
import { Container, Heading } from '@chakra-ui/react'
const dashboard = () => {
  return (
	<Container >
	<Heading color="blue.900">
			Welcome to Rhema.AI
	</Heading>

	<Form />
	
	<Mood/>
  </Container>
  )
}

export default dashboard