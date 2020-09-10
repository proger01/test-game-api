import express, { Request, Response } from 'express';
import cors from 'cors';
import { testData } from './testData';

const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/get-testdata', (req: Request, res: Response) => {
    res.json(testData);
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
