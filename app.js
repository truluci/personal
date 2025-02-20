import express from 'express';

import indexRouter from './routes/index.js';
import picturesRouter from './routes/pictures.js';
import projectsRouter from './routes/projects.js';
import aboutRouter from './routes/about.js';

const PORT = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/pictures', picturesRouter);
app.use('/projects', projectsRouter);
app.use('/about', aboutRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
