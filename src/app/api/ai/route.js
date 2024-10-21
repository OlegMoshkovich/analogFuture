import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"], // This is the default and can be omitted
});

export async function GET(req) {
  // WARNING: Do not expose your keys
  // WARNING: If you host publicly your project, add an authentication layer to limit the consumption of ChatGPT resources

  const question = req.nextUrl.searchParams.get("question") || "What is your purpose?";

  const chatCompletion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `You are a kind robot. You should respond with a JSON object in the most kind way.`,
      },
      {
        role: "system",
        content: `You always respond with a JSON object with the following format:
        {
          "question": "${question}",
          "answer": "Your kind response here"
        }`,
      },
      {
        role: "user",
        content: question
      },
    ],
    // model: "gpt-4-turbo-preview", // https://platform.openai.com/docs/models/gpt-4-and-gpt-4-turbo
    model: "gpt-3.5-turbo", // https://help.openai.com/en/articles/7102672-how-can-i-access-gpt-4
  });
  console.log(chatCompletion.choices[0].message.content);
  return Response.json(JSON.parse(chatCompletion.choices[0].message.content));
}
