import { Request, Response, NextFunction } from 'express'
import axios from 'axios';
import { Repository } from '../components/Types';
const ChatBotMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const language = req.params.language;

    const repositories: Repository[] = (await axios.get("https://api.github.com/orgs/takenet/repos")).data;

    const languageSelected = repositories
        .filter(repository => {
            if (repository.language != null) {
                if (repository.language.toUpperCase() === language.toUpperCase()) {
                    return repository;
                }
            }
        });

    languageSelected.sort((a, b) => {
        if (a.created_at > b.created_at) {
            return 1;
        } else if (a.created_at < b.created_at) {
            return -1;
        }
        return 0;
    });

    const repositoriesOld = languageSelected.slice(0,5);

    res.status(200).send(repositoriesOld);
}

export default ChatBotMiddleware;