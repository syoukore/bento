import angular from "angular";

let infoModule = angular.module("info", ["core.api"]);

import infoConfig from "./info.config";
infoModule.config(infoConfig);

import infoController from "./info.controller";
infoModule.controller("infoController", infoController);

export default infoModule;
