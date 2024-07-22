import { connectToDb } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req, res) => {
    const { userId, prompt, tag } = await req.json();

    try {
        await connectToDb(); // needs to call it evrytime as it is a lambda function, it dies after the function is executed
        const newPrompt = new Prompt({
            creator: userId,
            prompt: prompt,
            tag: tag,
        })

        await newPrompt.save();

        return new Response(JSON.stringify(newPrompt), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 })
    }
}