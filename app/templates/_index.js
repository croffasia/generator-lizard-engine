/**
 * Created by LizardEngine on <%=CreatedDate%>
 *
 * NPM package: https://www.npmjs.com/package/lizard-engine
 * Github: https://github.com/PoluosmakAndrew/lizard-engine
 *
 * Support: https://github.com/PoluosmakAndrew/lizard-engine/issues
 */

var lizard = require('lizard-engine'),
    middleware = require('./middleware');

lizard.on(lizard.EVENT_COMPLETE_CONFIGURE, function(){
  lizard.start();
});

lizard.init({
  'name': '<%=AppName%>',
  'main controller': 'app.index',
  'application configure': middleware
});
