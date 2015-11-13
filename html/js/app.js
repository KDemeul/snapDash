(function(){
	var appDashboard = angular.module('appDashboard', [ ]);

	appDashboard.controller('MainController', function() {
		var ctrl = this;
		ctrl.todolist = todolist;
		ctrl.taskToAdd = "";

		ctrl.addTodo = function() {
			if(ctrl.taskToAdd != ""){
				ctrl.todolist.push({task:ctrl.taskToAdd, done:false});
				ctrl.taskToAdd = "";
			}
		};
		ctrl.archive = function() {
			var oldTodos = ctrl.todolist;
			ctrl.todolist = [];
			angular.forEach(oldTodos, function(todo) {
				if (!todo.done) ctrl.todolist.push(todo);
			});
		};
	});
})();

var todolist = 
[
{task: "Add \"add task\" field", done: true},
{task: "Manage existing task", done: false}
];

