
/*

Physical Device Testing Scenarios
---------------------------------


*/


describe('Ionic Viewport', function() {
  var window;

  beforeEach(inject(function($window) {
    window = $window;
    window._setTimeout = window.setTimeout;
    window.setTimeout = function(){};
    _activeElement = null; // the element which has focus
    window.cordova = undefined;
    window.device = undefined;
    ionic.Platform.ua = '';
    ionic.Platform.platforms = null;
    ionic.Platform.setPlatform('');
    ionic.Platform.setVersion('');
    ionic.keyboard.isOpen = false;
  }));

  afterEach(function(){
    window.setTimeout = window._setTimeout;
  });

  it('Should have height=device-height for iOS 7+ on webview', function(){

  });

  it('Should not have height=device-height for iOS 7+ on browser', function(){

  });

  it('Should have height=device-height for Android on webview', function(){

  });

  it('Should not have height=device-height for Android on browser', function(){

  });

});
