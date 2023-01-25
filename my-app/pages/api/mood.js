import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
	const response = await openai.createCompletion({
		prompt: generatePrompt(req.body.mood),
		max_tokens: 100,
		temperature: 0,

		model: 'text-davinci-002',
	});
	res.status(200).json({ result: JSON.stringify(response.data.choices[0].text)});
	
}

function generatePrompt(mood) {

		let prompt = "";
		if (mood === "Happy") {
			prompt = "Find bible verses about joy and happiness";
		} else if (mood === "Sad") {
			prompt = "Find bible verses about comfort and healing";
		}else if (mood === "Angry") {
			prompt = "Find bible verses about Angry and Frustration";
		} else if (mood === "Anxious") {
			prompt = "Find bible verses about peace and calming";
		} else if (mood === "Peaceful") {
			prompt = "Find bible verses about gratitude and contentment";
		}else if (mood === "Desperate") {
			prompt = "Find bible verses about desperation";
		}
		return prompt;
	
}
