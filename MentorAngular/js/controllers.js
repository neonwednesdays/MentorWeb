var appControllers = angular.module('appControllers', ['ngAnimate', 'ngResource']);

appControllers.controller('WelcomeController', ['$scope', '$http', function($scope, $http) {

  $(document).on('click', '.welcome .welcome-message .button', function() {
    window.location.replace("https://login.gatech.edu/cas/login?service=http%3A%2F%2Fdev.m.gatech.edu%2Fd%2Fmosborne8%2Fw%2FMentorAngular%2Fcontent%2F")
  })
}]);

appControllers.controller('ForkController', ['$scope', '$http', function($scope, $http) {

}]);

appControllers.controller('UserController', ['$scope', '$http', function($scope, $http) {
  $http.get('api/welcome').success(function(data) {
    $scope.user = data['username'];
    $scope.userType = data['userType'];
  });
}]);

appControllers.controller('LoadingController', ['$scope', '$http', function($scope, $http) {
  // $http.get('http://dev.m.gatech.edu/d/mosborne8/w/mentoringweb/content/api/welcome').success(function(data) {
  //   $scope.user = data['username'];
  //   $scope.userType = data['userType'];
  // });
}]);

appControllers.controller('SearchController', ['$scope', '$http', function($scope, $http) {
  $('.ui.checkbox')
    .checkbox()
  ;
    $('.ui.accordion')
    .accordion()
  ;
  // $http.get('json-gen/users.json').success(function(data) {
  //   $scope.userdata = data;
  // });
  
}]);

appControllers.controller('RegisterMentorController', ['$scope', '$http', function($scope, $http) {
  $('.ui.dropdown').dropdown();
  $scope.addMentor = function() {
    $.ajax({
      url: "api/registerMentor",
      dataType: "json",
          async: false,
      data: {'fname': $scope.fname,
             'lname': $scope.lname,
             'email': $scope.email,
             'phone':$scope.phone,
             'pref_comm': $scope.pref_comm
            },
      type: 'POST'
      // error: ajaxError
    });
  }
}]);


appControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/data.json').success(function(data) {
    $scope.apps = data;
    $scope.appOrder = 'name';
  });
}]);

appControllers.controller('DetailsController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
  $http.get('js/data.json').success(function(data) {
    $scope.apps = data;
    $scope.whichItem = $routeParams.itemId;

    if ($routeParams.itemId > 0) {
      $scope.prevItem = Number($routeParams.itemId)-1;
    } else {
      $scope.prevItem = $scope.apps.length-1;
    }

    if ($routeParams.itemId < $scope.apps.length-1) {
      $scope.nextItem = Number($routeParams.itemId)+1;
    } else {
      $scope.nextItem = 0;
    }

  });
}]);

