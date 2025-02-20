import { Router } from 'express';

import aboutGetController from '../controllers/about/get.js';

const aboutRouter = Router();

aboutRouter.get('/',
  aboutGetController
);

export default aboutRouter;
