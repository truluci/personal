export default (req, res) => {
    return res.render('pictures/pictures', {
      page: 'pictures/pictures',
      title: 'pictures',
      includes: {
        js: ['page'],
        css: ['header', 'page', 'general']
      }
    });
  };
  