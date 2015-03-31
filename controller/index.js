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
      'Генератор базового класса контроллера!'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'controller_name',
        message: 'Название контроллера (без пробелов, только латиница)',
        default: ''
      }
      ,{
        type: 'input',
        name: 'module_name',
        message: 'Название модуля (без пробелов, только латиница)',
        default: ''
      }];

    this.prompt(prompts, function (props) {

      this.controller_name = props.controller_name || "controller";
      this.module_name = props.module_name || "module";

      done();

    }.bind(this));
  },

  writing: function () {

    this.template('_controller.js',
      'modules/'+this.module_name+'/controllers/'+this.controller_name+'.js',
      {CreatedDate: new Date()
        ,ControllerName: this.controller_name
      });

    this.template('_controller.html',
      'modules/'+this.module_name+'/views/'+this.controller_name+'.html',
      {});
  }
});
