export default (req, res) => {
    return res.render('about/about', {
      page: 'about/about',
      title: 'about',
      includes: {
        js: ['page'],
        css: ['header', 'page', 'general']
      }
    });
  };
  