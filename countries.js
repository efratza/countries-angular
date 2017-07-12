var app = angular.module ('select' , []);
app.controller('MainCtrl' ,function($scope){

$scope.counteries = [
		{model : "Israel", flag : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/660px-Flag_of_Israel.svg.png"},
        {model : "Bulgaria", flag : "https://restcountries.eu/data/bgr.svg"},
        {model : "Austria", flag : "https://restcountries.eu/data/aut.svg"},
        {model : "Belgium", flag : "https://restcountries.eu/data/bel.svg"}
    ];

});

// function MainCtrlfun($http){
// 	this.data = {};
// 	this.data.ajax = '';
// 	this.data.photo = '';

	// $http({
	// 	url: 'https://restcountries.eu/rest/v2/regionalbloc/eu', 
	// 	method: "GET",
	// }).then(function (response) {
	// 	console.log(response)
	// 	this.data.ajax = response.data[0].name;
	// 	this.data.photo =response.data[0].flag;
	// }.bind(this))

	// angular.forEach(this.data.ajax, function(){
 //     console.log(key + ': ' + value);
	// });
// }


 