function infoController($scope, $stateParams, $http) {
  //this.phones = Api.query();
  $http.get("http://140.116.187.101/").then(function(response) {
    console.log(response);
  });
}

export default infoController;
