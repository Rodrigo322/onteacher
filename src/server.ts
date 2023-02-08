import cors from 'cors';
import express from 'express';
import routes from './routes';

const app = express();
const PORT = 3333

app.use(cors()); 
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || PORT, () => console.log('server listening on'));
