import {Express} from 'express';
import ChatBotMiddleware from '../middleware/ChatBotMiddleware';

const ChatBotRoute = (app:Express)=>{
    app.route('/repositories/:language')
    .get((req,res,next)=>{next()},ChatBotMiddleware)
}

export default ChatBotRoute;