/**
 * Created by LizardEngine on <%=CreatedDate%>
 *
 * NPM package: https://www.npmjs.com/package/lizard-engine
 * Github: https://github.com/PoluosmakAndrew/lizard-engine
 *
 * Support: https://github.com/PoluosmakAndrew/lizard-engine/issues
 */

var lizard = require('lizard-engine'),
  BaseModel = lizard.Database.Model,
  Types     = lizard.Database.Types,
  util = require("util");

var Model = function()
{
  BaseModel.apply(this);

  this.collection = "<%=ModelName%>";

  this.init({"name" : { type: Types.String, required: true }});

};

util.inherits(Model, BaseModel);

module.exports = Model;
