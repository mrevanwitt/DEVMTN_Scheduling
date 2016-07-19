angular.module("calendar").service("calendarServ", function($http) {

  this.getCollections = function() {
    return $http({
      method: 'GET',
      url: '/collection'
    }).then(function(response) {
      return response;
    });
  };

  this.getCollection = function(id) {
    return $http({
      method: 'GET',
      url: '/collection?_id=' + id
    }).then(function(response) {
      return response;
    });
  };

  this.createCollection = function(collection) {
    return $http({
      method: 'POST',
      url: '/collection',
      data: collection
    }).then(function(response) {
      return response;
    });
  };

  this.updateCollection = function(id, collection) {
    return $http({
      method: 'PUT',
      url: "/collection/" + id,
      data: collection
    }).then(function(response) {
      return response;
    });
  };

  this.deleteCollection = function(id) {
    return $http({
      method: 'DELETE',
      url: '/collection/' + id
    }).then(function(response) {
      return response;
    });
  };
});
