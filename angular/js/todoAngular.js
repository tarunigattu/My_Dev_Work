(function(){
	var module = angular.module('todo', []);

  function todoheader(){
    this.name = "To Do List";
  }
  module.directive('header', function(){
    return {
     restrict : 'E',
     templateUrl: 'todoheader.html',
     controller: todoheader,
     controllerAs: 'header'
   };
 });

  module.controller('todoCtrl', function($scope) {
   $scope.todoList = [];
   $scope.todoAdd = function() {
    $scope.todoList.push({todoText:$scope.todoInput, done:false});
    $scope.todoInput = "";
  };

  $scope.todoDelete = function(index) {
    $scope.todoList.splice(index, 1);

  };

  $scope.class = "undone";
  $scope.strikethrough = "";
  $scope.changeClass = function(){
    if (this.class === "undone")
    {
     this.class = "done";
     this.strikethrough = "strikethrough";
   }
   else
   {
     this.class = "undone";
     this.strikethrough = "";
   }
 };


 $scope.toggleEditMode = function(){
  $(event.target).closest('li').toggleClass('editing');
};
$scope.editOnEnter = function(todo){
  if(event.keyCode == 13 && todo.todoText){
    $scope.toggleEditMode();
  }
};

});

})();