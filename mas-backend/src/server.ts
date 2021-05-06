import express from 'express';
import '../src/databases';
import cors from 'cors';
import routes from './route';

const app = express();

app.use(cors ());
app.use(express.json ());
app.use(routes);

app.listen(3333, () => console.log('server started'));
