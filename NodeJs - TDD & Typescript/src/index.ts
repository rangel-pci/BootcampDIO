import express from 'express';
import { routes } from './routes';

const server = express();
server.use(express.json());
server.use(routes);

server.listen(5000, () => {
    console.log('Running at port 5000');
});