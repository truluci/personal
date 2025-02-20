import { Router } from 'express';

import indexGetController from '../controllers/index/get.js';

const indexRouter = Router();

indexRouter.get('/',
  indexGetController
);

export default indexRouter;
