(function(){
	var appDashboard = angular.module('appDashboard', [ ]);

	appDashboard.controller('MainController', function() {
		this.todolist = todolist;
	});
})();

var todolist = 
[
	{
		title: "Note1",
		content: "Content1"
	},
	{
		title: "Note2",
		content: "Content2"
	}
];