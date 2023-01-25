import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
	const response = await openai.createCompletion({
		prompt: generatePrompt(req.body.book, req.body.chapter, req.body.verse, req.body.tone),
		max_tokens: 100,
		temperature: 0,

		model: 'text-davinci-002',
	});
	res.status(200).json({ result: JSON.stringify(response.data.choices[0].text)});
	
}

function generatePrompt(book, chapter, verse,tone) {
    return `summarize ${book} ${chapter}:${verse} in a ${tone}`;
}
