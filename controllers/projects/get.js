export default (req, res) => {
    return res.render('projects/projects', {
      page: 'projects/projects',
      title: 'projects',
      includes: {
        js: ['page'],
        css: ['header', 'page', 'general']
      }
    });
  };
  