// Notes, Mostly from AngularJS Book


//-----------Thursday, August 21, 2014------------//

// seeing $scope.watch working, how it can detect changes from a database as well, not just the input boxes on the front end like ng-model
var computeNeeded = function() {
  $scope.funding.needed = $scope.funding.startingEstimate * 10;
};

$scope.watch('funding.startingEstimage', computeNeeded); // note the lack of () on computeNeeded here..

// the html template side
<form ng-controller="StartUpController">
  Starting: <input ng-model="funding.startingEstimate">
  Recommendation: {{ funding.needed }}
</form>

//-----------//

// ng-submit review

<form ng-submit="requestFunding()" ng-controller="StartUpController"> // note the () here.  so in angular directives need the function call.
  Starting: <input ng-model="funding.starting.startingEstimate" ng-change="computeNeeded()">
  Recommendation: {{funding.needed}}
  <button>Fund My Startup!</button>
</form>

// controller
function StartUpController($scope) {
  $scope.funding = { startingEstimate: 0 };

  $scope.computeNeeded = function() {
    $scope.funding.needed = $scope.funding.startingEstimate * 10;
  };

  $scope.requestFunding = function() {
    window.alert("Sorry!! Please get more customers first.")
  };
}

//---------//

// adding a reset button, practicing ng-click

<form ng-controller="StartUpController">
  Starting: <input ng-model="funding.startingEstimate" ng-change="computeNeeded()">
  Recommendation: {{funding.needed}}
  <button ng-click="requestFunding()">Fund My Startup</button>
  <button ng-click="reset()">Reset</button>  //notice since we have two buttons now, we don't use ng-submit anymore.  you might submit on a reset with that way.
</form>

// controller
function StartUpController($scope) {
  $scope.funding = { startingEstimate: 0 };

  $scope.computeNeeded = function() {
    $scope.funding.needed = $scope.funding.startingEstimate * 10;
  };

  $scope.requestFunding = function() {
    window.alert("Sorry, get more customers first");
  };

  $scope.reset = function() {
    $scope.funding.startingEstimate = 0;
    $scope.funding.needed = 0;
  };
}

//--------//

// practicing ng-repeat

var students = [{name:'mary contrary', id:1},
                {name:'jack sprat', id:2},
                {name:'jill thrill', id:3}];

function StudentController($scope) {
  $scope.students = students;
}

// template
<ul ng-controller="StudentController">
  <li ng-repeat="student in students">
    <a ng-href="/student/view/{{student.id}}">{{student.name}}</a>
  </li>
</ul>

//-------//

// highlighting a selected (by click) row

// css
.selected {
  background-color: lightgreen;
}

// template
<table ng-controller="RestaurantTableController">
  <tr ng-repeat="restaurant in directory" ng-click="selectRestaurant($index)" ng-class="{selected: $index==selectedRow}">
    <td>{{restaurant.name}}</td>
    <td>{{restaurant.cuisine}}</td>
  </tr>
</table>

//controller
function RestaurantTableController($scope) {
  $scope.directory = [{name:'the handsome heifer', cuisine:'bbq'},
                      {name:'Green\'s Green Greens', cuisine:'salads'},
                      {name:'House of Fine Fish', cuisine:'seafood'}];

  $scope.selectRestaurant = function(row) {
    $scope.selectedRow = row;
  };
}

//-------//

// must use ng-src instead of src in img tags, and ng-href instead of href in 'a' tags bc the dom will load them before angular can arrive on scene
<img ng-src="/images/cats/{{favoriteCat}}">
//and
<a ng-href="/shop/category={{numberOfBalloons}}">buy this balloon</a>

//------//
