import { connectToDb } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (req) => {
    try {
        await connectToDb();
        const prompts = await Prompt.find({}).populate('creator')
        console.log("Fetched prompts:", prompts); // Log fetched prompts for debugging
        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch prompts", { status: 500 })
    }
}