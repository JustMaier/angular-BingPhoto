angular-BingPhoto
=================

Angular service to get Bings photo of the day

##Installation

`bower install angular-BingPhoto`

Or manually by downloading and adding the following to your html:

`<script type="text/javascript" src="js/BingPhoto.js"></script>`

##Usage

1. Include the `BingPhoto.js` script provided by this component into your app
2. add `BingPhoto` as a module dependency to your app

####Javascript
```javascript
angular.module('app',['BingPhoto'])
.controller('appCtrl',['$scope','BingPhoto', function($scope, BingPhoto){
	$scope.BingPhoto = BingPhoto({size:'1920x1080'}); //Default size is 1920x1080
}]);
```

####HTML
```html
<img ng-src="{{BingPhoto.url}}" alt="{{BingPhoto.copyright}}" title="{{BingPhoto.copyright}}"/>
```

##Options

* `size` A bing image size (see known list of sizes below)
* `proxy` Url of a CORS Proxy to use for the request

###Bing Image Sizes

All image sizes can be portrait and landscape

* 1920x1080
* 1280x768
* 1366x768
* 1024x768
* 800x600
* 800x480
* 640x480

##Notes

* The data is grabbed from [Bing's own webservice](http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1)
* A CORS Proxy is necessary to get the data from Bing. A public CORS Proxy, [corsproxy.com](http://www.corsproxy.com) is used by default 
* I'm not sure about the legality of using these images on your site