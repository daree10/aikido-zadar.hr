var app = angular.module("aikiApp", ['ngRoute']);

app.config(function($routeProvider)
{
	$routeProvider
		.when( '/novosti', { controller: 'newsCtrl', templateUrl: 'views/novosti.html' } )
		.when('/instruktori', { templateUrl: 'views/instruktori.html' })
		.when('/povijest', { templateUrl: 'views/povijest.html' })
		.when('/treninzi', { templateUrl: 'views/treninzi.html' })
		.when('/galerija', { templateUrl: 'views/gal.html' })
		.when('/galerija/:year', { controller: 'changeYearCtrl', templateUrl: 'views/gal.html' })
		.otherwise( { redirectTo: '/novosti' } );
});	

app.controller("newsCtrl", [ '$scope','$route','$routeParams', function($scope,$route,$routeParams) {

	$scope.articles = [ {
		'title' : 'Pocetak treninga',
		'text' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
		'date' : '18. rujan 2015.'
	}, {
		'title' : 'Pocetak rrrr',
		'text' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
		'date' : '17. rujan 2015.'
	}, {
		'title' : 'Pocetak sezone',
		'text' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
		'date' : '12. listopad 2014.'
	}, {
		'title' : 'Pocetak Are you gunna stay',
		'text' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
		'date' : '18. rujan 2013.'
	}, ];
	
	$scope.addRow = function() {
		$scope.companies.push({
			'title' : $scope.name,
			'text' : $scope.employees,
			'date' : $scope.headoffice
		});
		$scope.name = '';
		$scope.employees = '';
		$scope.headoffice = '';
	};
	
	
} ]);

app.controller("changeYearCtrl", [ '$scope','$route','$routeParams', function($scope,$route,$routeParams) {

				$scope.$on(
					"$routeChangeSuccess",
					function( $currentRoute, $previousRoute ){
						var is1990 = ($routeParams.year == "1990");
						var is1992 = ($routeParams.year == "1992");
						var is1995 = ($routeParams.year == "1995");
						var is1996 = ($routeParams.year == "1996");
						var is2001 = ($routeParams.year == "2001");
						var is2002 = ($routeParams.year == "2002");
						var is2003 = ($routeParams.year == "2003");
						var is2005 = ($routeParams.year == "2005");
						var is2007 = ($routeParams.year == "2007");
						var is2008 = ($routeParams.year == "2008");
						var is2011 = ($routeParams.year == "2011");
						var is2015 = ($routeParams.year == "2015");
						
						$scope.is1990 = is1990;
						$scope.is1992 = is1992;
						$scope.is1995 = is1995;
						$scope.is1996 = is1996;
						$scope.is2001 = is2001;
						$scope.is2002 = is2002;
						$scope.is2003 = is2003;
						$scope.is2005 = is2005;
						$scope.is2007 = is2007;
						$scope.is2008 = is2008;
						$scope.is2011 = is2011;
						$scope.is2015 = is2015;
						
						$scope.year = $routeParams.year;
						
						$scope.getInclude = function(){
							
							return "views/gallery_templates/"+$scope.year+".html";
						}
					}
				);
	
	
} ]);