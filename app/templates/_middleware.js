/**
 * Created by LizardEngine on <%=CreatedDate%>
 *
 * NPM package: https://www.npmjs.com/package/lizard-engine
 * Github: https://github.com/PoluosmakAndrew/lizard-engine
 *
 * Support: https://github.com/PoluosmakAndrew/lizard-engine/issues
 */

var lizard = require('lizard-engine');

module.exports = function(expressApplication, next){

    lizard.Plugins.Run(this, 'middleware', expressApplication);
    next();

};
