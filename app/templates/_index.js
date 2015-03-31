/**
 * Created by LizardEngine on <%=CreatedDate%>
 *
 * NPM package: https://www.npmjs.com/package/lizard-engine
 * Github: https://github.com/PoluosmakAndrew/lizard-engine
 *
 * Support: https://github.com/PoluosmakAndrew/lizard-engine/issues
 */

var lizard = require('lizard-engine');

lizard.init({
  'mongodb db': '<%=DataBaseName%>',
  'mongodb host': '<%=DataBaseHost%>',
  'mongodb port': '<%=DataBasePort%>',
  'mongodb user': '<%=DataBaseUserName%>',
  'mongodb password': '<%=DataBasePassword%>',
  'port': '<%=AppPort%>',
  'main controller': 'app.index'
});

lizard.start();
