import angular from "angular";

let selectionModule = angular.module("selection", []);

import selectionConfig from "./selection.config";
selectionModule.config(selectionConfig);

import selectionController from "./selection.controller";
selectionModule.controller("selectionController", selectionController);

selectionModule.filter("idnum", function() {
  return function(input) {
    input = input || "";
    input = input.toString();
    if (input.length < 3) {
      return "0" + input;
    } else {
      return input;
    }
  };
});

export default selectionModule;
