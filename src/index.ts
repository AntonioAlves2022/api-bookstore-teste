import Fastify from "fastify";
import cors from "@fastify/cors";


const start = async() =>{
    const app = Fastify({logger: true});
    app.register(cors, {origin: true});
    const port = 4444;

    app.get("/", (req, reply) =>{
        return reply.status(200).send({message: "Hello"});
    });

    app.listen({port})
}

start();