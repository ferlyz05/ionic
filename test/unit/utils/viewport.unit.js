
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

    var vportTag = document.createElement('meta');
    vportTag.setAttribute('name', 'viewport');
    vportTag.setAttribute('class', 'viewportTest');
    document.head.appendChild(vportTag);
  
  }));

  afterEach(function(){
    window.setTimeout = window._setTimeout;
    //getElementById was returning an invalid object for some reason
    var vportTag = document.getElementsByClassName('viewportTest')[0];
    vportTag.parentNode.removeChild(vportTag);
  });

  it('Should have height=device-height for iOS 7+ on webview', function(){
    ionic.Platform.setPlatform('iOS');
    ionic.Platform.setVersion('7.0');
    expect( ionic.Platform.isAndroid() ).toEqual(false);
    expect( ionic.Platform.isIOS() ).toEqual(true);
    //
    //so isWebView() is true
    window.cordova = {};

    viewportLoadTag();
    expect( viewportProperties.height ).toEqual('device-height'); 
  });

  it('Should not have height=device-height for iOS 7+ on browser', function(){

  });

  it('Should have height=device-height for Android on webview', function(){

  });

  it('Should not have height=device-height for Android on browser', function(){

  });

});
