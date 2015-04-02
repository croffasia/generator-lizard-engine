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
      'Установщик дополнений LizardEngine!'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'link_to_path',
        message: 'Ссылка на Github репозиторий или ZIP архив',
        default: ''
      }];

    this.prompt(prompts, function (props) {

      this.link_to_path = props.link_to_path;
      done();

    }.bind(this));
  },

  writing: function () {

    if(this.link_to_path != undefined && this.link_to_path != "") {
      var exp = [],
        userName = "",
        repo = "",
        zip = "";

      if (this.link_to_path.indexOf("https://github.com/") > -1) {
        exp = this.link_to_path.split("/");

        if (exp.length > 3) {
          userName = exp[3];
        }


        if (exp.length > 4) {
          repo = exp[4].replace(".git", "");
        }
      }

      if (this.link_to_path.indexOf("git@github.com:") > -1) {
        exp = this.link_to_path.split(":")[1].split('/');

        if (exp.length == 2) {
          userName = exp[0];
          repo = exp[1].replace(".git", "");
        }
      }

      if (this.link_to_path.indexOf(".zip") > -1) {
        zip = this.link_to_path;
      }

      var context = this;

      var DownloadCallback = function (err, remote) {

        if (err) {
          context.log("Что-то пошло не так!".red);
          return;
        }

        context.install_config = remote.src.read('install.json');

        try {
          context.install_config = JSON.parse(context.install_config);
        } catch (e) {
          context.install_config = {};
        }

        if (context.install_config != null && context.install_config != undefined) {
          if (context.install_config.hasOwnProperty('dependencies')) {
            for (var key in context.install_config['dependencies']) {
              if (context.install_config['dependencies'].hasOwnProperty(key)) {
                context.npmInstall([key + "@" + context.install_config['dependencies'][key]], {save: true});
              }
            }
          }
        }

        remote.directory('./install', './');

      };

      if (userName != "" && repo != "") {
        this.remote(userName, repo, DownloadCallback);
      }

      if (zip != "") {
        this.remote(zip, DownloadCallback);
      }

      if ((userName == "" || repo == "") && zip == "") {
        this.log("Ссылка на GitHub репозиторий указана не верно!".red);
      }
    }
  }
});
