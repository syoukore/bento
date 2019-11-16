function infoConfig($stateProvider, $urlRouterProvider) {
  $stateProvider.state("info", {
    name: "info",
    url: "/info",
    controller: "infoController",
    controllerAs: "$ctrl",
    templateUrl: "./info.template.html"
  });
  $urlRouterProvider.when('', '/info');
}

export default infoConfig;
