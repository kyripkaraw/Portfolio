import { initServer } from "@ts-rest/fastify";
import Fastify from "fastify";
import cors from "@fastify/cors";
import { contract } from './contract';

const app = Fastify();
app.register(cors, {
    origin: true
});
const s = initServer();

const router = s.router(contract, {
    sendVideoUrl: async ({ body }) => {
        const userLink = body.url;
        console.log("Get link:", userLink);
        return {
            status: 200,
            body: { message: "Link accepted, working on it..." },
        }

    }
});

app.register(s.plugin(router));

app.listen({ port: 3000 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server started at ${address}`);
});
