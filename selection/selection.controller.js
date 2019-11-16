import $ from "jquery";

function selectionController($scope, $stateParams) {
  this.phones = [
    {
      id: 14,
      name: "洪美淑",
      self: false,
      selection: 1
    },
    {
      id: 17,
      name: "馮昭瑞",
      self: true,
      selection: 0
    },
    {
      id: 18,
      name: "林雪芬",
      self: false,
      selection: 1
    }
  ];
  this.options = [
    {
      id: 0,
      value: "不訂購"
    },
    {
      id: 1,
      value: "便當"
    }
  ];
  this.mode = $stateParams.mode;
  this.edit = this.mode === "edit";

  this.init = function() {
    $(".datepicker").datepicker({});
  };
}

export default selectionController;
