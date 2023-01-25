import React, { useState } from 'react';
import axios from 'axios';
import {Flex, Button, Input, FormControl, Select, Text, Heading,
	FormFormLabel,
	FormErrorMessage,
	FormHelperText,
	FormLabel} from '@chakra-ui/react'
const Form = () => {
  const [book, setBook] = useState('');
  const [chapter, setChapter] = useState('');
  const [verse, setVerse] = useState('');
  const [tone, setTone] = useState('');
  const [output, setOutput] = useState('');


  const tones =["Inspirational","Devotional","Educational", "Educational","Thought-Proviking","Conversational","Conversational","Empowering"]

  const books = [
    "Genesis",
    "Exodus",
    "Leviticus",
    "Numbers",
    "Deuteronomy",
    "Joshua",
    "Judges",
    "Ruth",
    "1 Samuel",
    "2 Samuel",
    "1 Kings",
    "2 Kings",
    "1 Chronicles",
    "2 Chronicles",
    "Ezra",
    "Nehemiah",
    "Esther",
    "Job",
    "Psalm",
    "Proverbs",
    "Ecclesiastes",
    "Song of Solomon",
    "Isaiah",
    "Jeremiah",
    "Lamentations",
    "Ezekiel",
    "Daniel",
    "Hosea",
    "Joel",
    "Amos",
    "Obadiah",
    "Jonah",
    "Micah",
    "Nahum",
    "Habakkuk",
    "Zephaniah",
    "Haggai",
    "Zechariah",
    "Malachi",
    "Matthew",
    "Mark",
    "Luke",
    "John",
    "Acts",
    "Romans",
    "1 Corinthians",
    "2 Corinthians",
    "Galatians",
    "Ephesians",
    "Philippians",
    "Colossians",
    "1 Thessalonians",
    "2 Thessalonians",
    "1 Timothy",
    "2 Timothy",
    "Titus",
    "Philemon",
    "Hebrews",
	"James",
	"1 Peter",
	"2 Peter",
	"1 John",
	"2 John",
	"3 John",
	"Jude",
	"Revelation"
	];
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(book , chapter, verse, tone)
		if(!books.includes(book)) {
			setOutput("Please Select a valid book")
			return;
		  }
	  
      if(!tones.includes(tone)) {
        setOutput("Please Select a valid Tone")
        return;
        }
		  if(!chapter || isNaN(chapter)) {
			setOutput("Invalid chapter number")
			return;
		  }
		  try {
			const response = await fetch("/api/summarize", {
				method: "POST",
				headers: {
				  "Content-Type": "application/json",
				},
				body: JSON.stringify({ book:book, chapter: chapter, verse: verse , tone: tone }),
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
		<Heading>Bible Passage Summarizer</Heading>
	<form onSubmit={handleSubmit}>
	<FormControl>
    <FormLabel >
      Book
	</FormLabel>
      <Select

        value={book}
        onChange={e => setBook(e.target.value)}>
        <option value="" disabled>Select a Book</option>
        {books.map((book, index) => (
          <option key={index} value={book}>{book}</option>
        ))}
      </Select>
   
   

    <FormLabel >
      Chapter
      <Input
        type="number"
        value={chapter}
        onChange={e => setChapter(e.target.value)}
      />
    </FormLabel>

    <FormLabel >
      Verse
      <Input
        type="text"
        value={verse}
        onChange={e => setVerse(e.target.value)}
      />
    </FormLabel>
    <FormLabel >
      Tone
      <Select
       
        value={tone}
        onChange={e => setTone(e.target.value)}>
        <option value="" disabled>Select a Tone</option>
        {tones.map((tone, index) => (
          <option key={index} value={tone}>{tone}</option>
        ))}
      </Select>
    </FormLabel>
    <Button colorScheme="blue" type="submit" >
      Submit
    </Button>

      {
	  output && 
    <Flex>
     <Heading> Summarize:</Heading><Text> {output}</Text> 
    </Flex>
	  }
	</FormControl>
    </form>
	</Flex>
    
		)
	
}

export default Form;
