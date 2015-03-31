'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the astonishing ' + chalk.red('LizardEngine') + ' generator!'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'app_name',
        message: 'Введите название приложения (без пробелов, только латиница)',
        default: this.appname
      }
      ,{
        type: 'input',
        name: 'app_port',
        message: 'Порт приложения',
        default: 5000
      },{
        type: 'input',
        name: 'db_host',
        message: 'MongoDB хост',
        default: 'localhost'
      },{
        type: 'input',
        name: 'db_database_name',
        message: 'MongoDB имя базы данных',
        default: this.appname
      },{
        type: 'input',
        name: 'db_database_port',
        message: 'MongoDB порт',
        default: 27017
      },{
        type: 'input',
        name: 'db_database_user',
        message: 'Пользователь MongoDB',
        default: ''
      },{
        type: 'input',
        name: 'db_database_pass',
        message: 'Пароль MongoDB',
        default: ''
      }];

    this.prompt(prompts, function (props) {

      this.app_name = props.app_name;
      this.app_port = props.app_port;
      this.db_host = props.db_host;
      this.db_database_name = props.db_database_name;
      this.db_database_port = props.db_database_port;
      this.db_database_user = props.db_database_user;
      this.db_database_pass = props.db_database_pass;

      done();

    }.bind(this));
  },

  writing: {
    app: function () {

      this.mkdir('modules');
      this.mkdir('modules/app');
      this.mkdir('modules/app/components');
      this.mkdir('modules/app/controllers');
      this.mkdir('modules/app/models');
      this.mkdir('modules/app/views');
      this.mkdir('modules/app/public');
      this.mkdir('plugins');
      this.mkdir('public');
      this.mkdir('public/css');
      this.mkdir('public/js');
      this.mkdir('public/fonts');
      this.mkdir('views');
      this.mkdir('views/layouts');

      this.template('modules/app/controllers/_app_controller.js', 'modules/app/controllers/index.js', {CreatedDate: new Date() });

      this.fs.copy(
        this.templatePath('modules/app/views/_main.html'),
        this.destinationPath('modules/app/views/index.html')
      );

      this.fs.copy(
        this.templatePath('views/layouts/_main.html'),
        this.destinationPath('views/layouts/main.html')
      );

      this.fs.copy(
        this.templatePath('views/_404.html'),
        this.destinationPath('views/404.html')
      );

      this.fs.copy(
        this.templatePath('views/_500.html'),
        this.destinationPath('views/500.html')
      );

      this.fs.copy(
        this.templatePath('public/css/_bootstrap.min.css'),
        this.destinationPath('public/css/bootstrap.min.css')
      );

      this.fs.copy(
        this.templatePath('public/fonts/_glyphicons-halflings-regular.eot'),
        this.destinationPath('public/fonts/glyphicons-halflings-regular.eot')
      );

      this.fs.copy(
        this.templatePath('public/fonts/_glyphicons-halflings-regular.svg'),
        this.destinationPath('public/fonts/glyphicons-halflings-regular.svg')
      );

      this.fs.copy(
        this.templatePath('public/fonts/_glyphicons-halflings-regular.ttf'),
        this.destinationPath('public/fonts/glyphicons-halflings-regular.ttf')
      );

      this.fs.copy(
        this.templatePath('public/fonts/_glyphicons-halflings-regular.woff'),
        this.destinationPath('public/fonts/glyphicons-halflings-regular.woff')
      );

      this.fs.copy(
        this.templatePath('public/fonts/_glyphicons-halflings-regular.woff2'),
        this.destinationPath('public/fonts/glyphicons-halflings-regular.woff2')
      );

      this.fs.copy(
        this.templatePath('public/js/_bootstrap.min.js'),
        this.destinationPath('public/js/bootstrap.min.js')
      );

      this.fs.copy(
        this.templatePath('public/js/_jquery-1.11.2.min.js'),
        this.destinationPath('public/js/jquery-1.11.2.min.js')
      );

      this.template('_package.json', 'package.json', {appName: this.app_name });
      this.template('modules/app/_routing.json', 'modules/app/routing.json', {ModuleName: 'app' });

      this.template('_index.js', 'index.js', {AppPort: this.app_port
                                              ,DataBaseName: this.db_database_name
                                              ,CreatedDate: new Date()
                                              ,DataBaseHost: this.db_host
                                              ,DataBasePort: this.db_database_port
                                              ,DataBaseUserName: this.db_database_user
                                              ,DataBasePassword: this.db_database_pass
                                             });
    }
  },

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  }
});
