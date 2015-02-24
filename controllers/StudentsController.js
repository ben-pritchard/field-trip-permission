studentRoster.controller("StudentsCtrl", function StudentsCtrl($scope, StudentsFactory) {
  $scope.students = StudentFactory.students;
  $scope.StudentsFactory = StudentsFactory;
  };
});
