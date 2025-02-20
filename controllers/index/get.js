export default (req, res) => {
    return res.render('index', {
      page: 'index/index',
      title: 'home',
      includes: {
        js: [],
        css: ['header', 'page', 'general']
      }
    });
  };
  