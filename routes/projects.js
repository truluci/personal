import { Router } from 'express';

import projectsGetController from '../controllers/projects/get.js';

const projectsRouter = Router();

projectsRouter.get('/',
  projectsGetController
);

export default projectsRouter;
