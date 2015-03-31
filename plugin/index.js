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
      'Генератор базового класса плагина!'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'plugin_name',
        message: 'Название плагина (без пробелов, только латиница)',
        default: ''
      }];

    this.prompt(prompts, function (props) {

      this.plugin_name = props.plugin_name || "plugin";

      done();

    }.bind(this));
  },

  writing: function () {

    this.template('_plugin.js',
      'plugins/'+this.plugin_name+'.js',
      {CreatedDate: new Date(), PluginName: this.plugin_name });
  }
});
