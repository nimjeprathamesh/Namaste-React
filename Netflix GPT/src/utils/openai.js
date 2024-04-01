import { OpenAI } from "openai";
import { OpenAI_Key } from "./constants.js";

const openai = new OpenAI({
    apiKey: OpenAI_Key,
    dangerouslyAllowBrowser: true,
});

export default openai;