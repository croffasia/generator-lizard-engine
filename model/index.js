'use strict';
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Генератор базового класса модели!'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'model_name',
        message: 'Название модели (без пробелов, только латиница)',
        default: ''
      }
      ,{
        type: 'input',
        name: 'module_name',
        message: 'Название модуля (без пробелов, только латиница)',
        default: ''
      }];

    this.prompt(prompts, function (props) {

      this.model_name = props.model_name || "model";
      this.module_name = props.module_name || "module";

      done();

    }.bind(this));
  },

  writing: function () {

    this.template('_model.js',
      'modules/'+this.module_name+'/models/'+this.model_name+'.js',
      {CreatedDate: new Date()
        ,ModelName: this.model_name
      });
  }
});
