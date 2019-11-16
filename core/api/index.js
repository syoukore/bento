angular.module("core.api", []);
angular.module("core.api").factory("Api", function($resource) {
  return $resource(
    "http://localhost:3000",
    {},
    {
      query: {
        method: "GET"
      }
    }
  );
});
