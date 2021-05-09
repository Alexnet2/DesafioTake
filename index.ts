import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import compression from 'compression';
import ChatBotRoute from './src/route/ChatBotRoute';

config();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(compression());

ChatBotRoute(app);

const port = process.env.PORT || 4000;

app.listen(port,()=>{
    console.log(`🚀 http://localhost:${port}`);  
})