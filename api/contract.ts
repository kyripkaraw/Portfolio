import { initContract } from "@ts-rest/core";
import { z } from "zod";

const c = initContract();


export const contract = c.router({
    sendVideoUrl: {
        method: "POST",
        path: "/process-video",
        body: z.object({
            url: z.string().url(),
        }),
        responses: {
            200: z.object({ message: z.string() }),
            400: z.object({ error: z.string() }),
        },
        summary: "Send video URL to backend"
    }
})