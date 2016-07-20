angular.module('calendar')
  .controller('calendarCtrl', function ($scope) {

    $scope.classes = [
      {location: 'Salt Lake City', curriculum: 'iOS After Hours', },
      {location: 'Salt Lake City', curriculum: 'iOS Immersive'},
      {location: 'Salt Lake City', curriculum: 'Web Dev After Hours'},
      {location: 'Provo', curriculum: 'Web Dev : Next After Hours'},
      {location: 'Provo', curriculum: 'Web Dev After Hours'},
      {location: 'Provo', curriculum: 'Web Dev Immersive'},
      {location: 'Provo', curriculum: 'Web Design UI/UX After Hours'},
      {location: 'Dallas', curriculum: 'Web Dev After Hours'},
      {location: 'Dallas', curriculum: 'iOS Immersive'},
      {location: 'Dallas', curriculum: 'Web Dev Immersive'}
    ];

      $scope.myClass = $scope.classes[2]

});
