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
      'Генератор базового модуля!'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'module_name',
        message: 'Название модуля (без пробелов, только латиница)',
        default: ''
      }];

    this.prompt(prompts, function (props) {

      this.module_name = props.module_name || "module";

      done();

    }.bind(this));
  },

  writing: function () {

    this.mkdir('modules/'+this.module_name);
    this.mkdir('modules/'+this.module_name+'/controllers');
    this.mkdir('modules/'+this.module_name+'/components');
    this.mkdir('modules/'+this.module_name+'/views');
    this.mkdir('modules/'+this.module_name+'/public');
    this.mkdir('modules/'+this.module_name+'/models');

    this.template('_routing.json', 'modules/'+this.module_name+'/routing.json', {ModuleName: this.module_name });

    this.template('_controller.js',
      'modules/'+this.module_name+'/controllers/index.js',
      {CreatedDate: new Date()
        ,ControllerName: 'index'
        ,ModuleName: this.module_name
      });

    this.template('_controller.html',
      'modules/'+this.module_name+'/views/index.html',
      {});

  }
});
