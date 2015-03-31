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
      'Генератор базового класса компонента!'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'component_name',
        required: true,
        message: 'Название компонента (без пробелов, только латиница)',
        default: ''
      }
      ,{
        type: 'input',
        name: 'module_name',
        required: true,
        message: 'Название модуля (без пробелов, только латиница)',
        default: ''
      }];

    this.prompt(prompts, function (props) {

      this.component_name = props.component_name || "component";
      this.module_name = props.module_name || "module";

      done();

    }.bind(this));
  },

  writing: function () {

    this.template('_component.js',
                  'modules/'+this.module_name+'/components/'+this.component_name+'.js',
                  {CreatedDate: new Date()
                   ,ComponentName: this.component_name
                  });

    this.template('_component.html',
      'modules/'+this.module_name+'/views/components/'+this.component_name+'.html',
      {});
  }
});
