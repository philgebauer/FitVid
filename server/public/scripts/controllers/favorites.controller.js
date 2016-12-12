youtubeAPI.controller('favoritesController', ['$http', 'dataFactory', 'AuthDataFactory', function($http, dataFactory, AuthDataFactory) {
    console.log('favoriteController up and running');

      var self = this;
      var arrayOfFavs = {};
      self.favId = [];
      var curEmail = AuthDataFactory.setCurrentEmail();


      self.getVideos = function() {
          $http.get('/favorites/' + curEmail )
              .then(function(response) {
                  arrayOfFavs = response.data;
                  console.log('arrayOfFavs', arrayOfFavs);
                  arrayOfFavs.forEach(function(fav) {
                    self.favId.push(fav.vidid);
                    });
                  console.log('favId', self.favId);
                  // updateFavorites();
          });
      }

      self.getVideos();
}]);
