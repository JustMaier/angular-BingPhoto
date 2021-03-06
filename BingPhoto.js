angular.module('BingPhoto',[])
.factory('BingPhoto',['$http', '$q', function($http, $q){
	return function(inputOptions){
		var options = {
			size: '1920x1080',
			proxy: 'http://www.corsproxy.com/'
		};
		for(var i in inputOptions){options[i] = inputOptions[i]};
		var BingPhoto = this;
	
		$http({method:'GET', url:options.proxy+'www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1'})
		.success(function(data){
			BingPhoto.url = 'http://www.bing.com'+data.images[0].urlbase+'_'+options.size+'.jpg';
			BingPhoto.copyright = data.images[0].copyright
		});

		return BingPhoto;
	}
}]);