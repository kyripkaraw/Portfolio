import {initServer} from "@ts-rest/fastify";
import Fastify from "fastify";
import cors from "@fastify/cors";
import {contract} from './contract';
import {YtDlp} from "ytdlp-nodejs";
import * as fs from "node:fs";

const app = Fastify();
app.register(cors, {
    origin: true
});
const s = initServer();
const ytdlp = new YtDlp();
const activeDownloads = new Map();


const router = s.router(contract, {
    sendVideoUrl: async ({ body }) => {
        const jobId = crypto.randomUUID();
        const userLink = body.url;

        activeDownloads.set(jobId, { status: 'starting', progress: 0 });
        DownloadVideo(userLink, jobId).catch(err => {
            activeDownloads.set(jobId, { status: 'error', error: err });
        });
        return {
            status: 200,
            body: {
                message: "Link accepted...",
                jobId: jobId
            },
        }

    },
    checkStatus: async ({ params }) => {
        const jobData = activeDownloads.get(params.jobId);
        if (!jobData) {
            return { status: 404, body: { error: "Job not found" } };
        }
        return { status: 200, body: jobData };
    },
    downloadVideo: async ({params, reply}) => {
        const jobData = params.jobId
        const filePath = `${jobData}.mp4`;
        if (!fs.existsSync(filePath)) {
            return { status: 404, body: { error: "File not found" } };
        }
        const fsStream = fs.createReadStream(filePath)
        reply.header('Content-Disposition', `attachment; filename="video.mp4"`);
        reply.header('Content-Type', 'video/mp4');
        return reply.send(fsStream);
    }
});

async function DownloadVideo(url: string, jobId: string) {
    try {
        await ytdlp.downloadAsync(url, {
            onProgress: (progress) => {
                activeDownloads.set(jobId, {
                    status: 'downloading',
                    ...progress
                });
            },
            output: `${jobId}.mp4`,
            format: 'mp4',
        });
        activeDownloads.set(jobId, { status: 'finished' });
    } catch (e) {
        throw e;
    }
}




app.register(s.plugin(router));
app.listen({ port: 3000 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server started at ${address}`);
});
