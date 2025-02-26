import fs from 'fs';
import path from 'path';

export default (req, res) => {
  const __dirname = path.resolve();
  const projects = JSON.parse(fs.readFileSync(path.join(__dirname, '/public/content/projects.json'), 'utf8'));

  return res.render('projects/projects', {
    page: 'projects/projects',
    title: 'projects',
    projects,
    includes: {
      js: ['page'],
      css: ['header', 'page', 'general']
    }
  });
};
  