import angular from "angular";
import "@uirouter/angularjs";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-datepicker/dist/css/bootstrap-datepicker3.min.css";
import "bootstrap-datepicker";
import "./style.css";
import $ from "jquery";

// Create and bootstrap application
const requires = [
  "ui.router",
  require('angular-resource'),
  "selection",
  "info"
  ];

window.app = angular.module("myMod", requires);

// app.module
import "./core";
import "./selection";
import "./info";

angular.bootstrap(document.getElementById("domRoot"), ["myMod"]);