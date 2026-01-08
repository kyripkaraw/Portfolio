import { initContract } from "@ts-rest/core";
import { z } from "zod";

const c = initContract();

export const contract = c.router({
    downloadVideo: {
        method: "GET",
        path: "/download/:jobId",
        pathParams: z.object({ jobId: z.string() }),
        responses: {
            200: z.string(),
            404: z.object({ error: z.string() })
        }
    },
    sendVideoUrl: {
        method: "POST",
        path: "/process-video",
        body: z.object({
            url: z.string(),
        }),
        responses: {
            200: z.object({
                message: z.string(),
                jobId: z.string(),
            }),
        },
    },
    checkStatus: {
        method: "GET",
        path: "/check-status/:jobId",
        pathParams: z.object({
            jobId: z.string(),
        }),
        responses: {
            200: z.object({
                status: z.string(),

                percentage: z.number().optional(),
                percentage_str: z.string().optional(),
                speed_str: z.string().optional(),
                eta_str: z.string().optional(),
                total_str: z.string().optional(),

                error: z.any().optional(),
            }),
            404: z.object({
                error: z.string(),
            })
        },
    },
});
