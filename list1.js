(function(){
	angular.module("turtleFacts")
	       .controller("listCtrl", ListController);
	 ListController.$inject = ['quizMetrics']; /* here by injecting quizMetrics into list controller we can access to quizMetrics. dependency injection is nothing but passing an object into function rather than creating object inside a function.It is very useful in application with many function you can inject anyfunction and use it to execute logic*/
	function ListController(quizMetrics){
		var vm = this;
		
		vm.quizMetrics = quizMetrics;
		vm. activateQuiz = activateQuiz;
	}
	 
	
	
	
	
	
	
	
})();