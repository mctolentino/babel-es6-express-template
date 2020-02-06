exports.get_home_page = function (req, res, next) {
  res.render('index', {title: 'Express'});
};

exports.post_home_page = function (req, res, next) {
  console.log(req.body);
  res.render('index', {title: 'Express'});
};