function selectionConfig($stateProvider) {
  $stateProvider.state("order", {
    name: "order",
    url: "/order/{mode}",
    params: {mode: "view"},
    controller: "selectionController",
    controllerAs: "$ctrl",
    templateUrl: "./selection.template.html"
  });
}

export default selectionConfig;
