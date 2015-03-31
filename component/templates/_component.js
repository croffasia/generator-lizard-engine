/**
 * Created by LizardEngine on <%=CreatedDate%>
 *
 * NPM package: https://www.npmjs.com/package/lizard-engine
 * Github: https://github.com/PoluosmakAndrew/lizard-engine
 *
 * Support: https://github.com/PoluosmakAndrew/lizard-engine/issues
 */

var lizard = require('lizard-engine');

module.exports = function(req, res, options, callback){

  if(typeof options === "function"){
    callback = options;
    options = {};
  }

  var view = new lizard.View(req, res, module.id);
  var locals = view.locals;
  locals.options = options;

  view.on('init', function(next){

      locals.name = '<%=ComponentName%>';
      next();

  });

  view.render('components/<%=ComponentName%>.html', callback);
};
