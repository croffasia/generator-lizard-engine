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
  util = require("util");

var Model = function()
{
  BaseModel.apply(this);

  this.collection = "<%=ModelName%>";
  this.columns = {_id: null, title: null };

};

// Наследуем класс от базовой модели
util.inherits(Model, BaseModel);

// Експорт модели
module.exports = Model;
