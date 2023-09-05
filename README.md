# DEPRECATED
Support for building Xbox apps with Radiant Media Player has been deprecated with version 9.9.0. 

## rmp-xbox

A demo app for using [Radiant Media Player](https://www.radiantmediaplayer.com) in a Xbox UWP app. We support the following Xbox devices:

- Xbox One+
- Xbox Series S
- Xbox Series X

For a list of supported features and more information on using Radiant Media Player in a Xbox UWP app [visit this link](https://www.radiantmediaplayer.com/docs/latest/xbox.html).

### Usage instructions

- Install Visual Studio 2017.
- Go to File > New > Project.
- In Installed > JavaScript > Windows Universal, select Blank App and create your project.
- Open package.appxmanifest file in Visual Studio. In the Application tab, check the Start page field and enter ms-appx-web:///index.html. This will allow us to bypass default UWP CSP (Content Security Policy) and make sure our Web app works as intended with Radiant Media Player.
- Copy the files of this repository in your UWP app and add the imported files to your project.
- Configure your Xbox as a developer Xbox and wire your Xbox to your Visual Studio project to enable deployment on a physical Xbox device.
- Deploy and navigate to the various links to see Radiant Media Player at work.

For PlayReady DRM support please refer to this [Microsoft link](https://docs.microsoft.com/en-us/windows/uwp/audio-video-camera/playready-client-sdk#use-playready-drm-on-xbox-one) as some information need to be manually added to the app manifest. See [here for an example](https://github.com/google/generic-webdriver-server/blob/826ab24885056591193857cc3c31af98bc60d3b0/backends/xboxone/app-template/Package.appxmanifest#L46-L54).

This demo app makes use of [tvjs from Microsoft](https://github.com/microsoft/TVHelpers/blob/master/tvjs/src/DirectionalNavigation/directionalnavigation-1.0.0.0.js) to make it easy to navigate through app links and player buttons.

This demo app can be used as a start point to develop more advanced Xbox UWP app and showcases some of the features Radiant Media Player has to offer when used to build Xbox UWP apps.

This demo app has been tested on Xbox Series S with OS 10.0.19041.7771.

### Alternative to using Visual Studio 2017

As an alternative to using JavaScript UWP app in Visual Studio 2017, you can build a native app embedding a WebView. [Guidelines for this use-case can be reviewed here](https://github.com/google/generic-webdriver-server/blob/main/backends/xboxone/how-it-works.md#the-container-app).

### License for rmp-xbox

rmp-xbox is released under MIT.

### License for Radiant Media Player

Radiant Media Player is a commercial HTML5 media player, not covered by the above MIT license.

Radiant Media Player license can be found here: [https://www.radiantmediaplayer.com/terms-of-service.html](https://www.radiantmediaplayer.com/terms-of-service.html).

You may request a free trial for Radiant Media Player at: [https://www.radiantmediaplayer.com/free-trial.html](https://www.radiantmediaplayer.com/free-trial.html).
