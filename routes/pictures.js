import { Router } from 'express';

import picturesGetController from '../controllers/pictures/get.js';

const picturesRouter = Router();

picturesRouter.get('/',
 picturesGetController
);

export default picturesRouter;
