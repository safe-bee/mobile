export default {
  expo: {
    name: "BeeSafe",
    slug: "beesafe",
    version: "1.0.0",
    icon: "./assets/icon4.png",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      url: "https://u.expo.dev/bdc871e7-68eb-436d-890c-83e3bc26ac2f"
    },
    ios: {
      bundleIdentifier: 'com.beesafe.mobile',
      infoPlist: {
        CFBundleAllowMixedLocalizations: true,
      },
      config: {
        googleMapsApiKey: "AIzaSyAdMYZIrkFpeODvZTeM1xHeAKzTE0XBdbg"
      }
    },
    android: {
      package: 'com.beesafe.mobile',
      adaptiveIcon: {
        foregroundImage: './assets/favicon.png',
        backgroundColor: "#ffffff",
      },
      config: {
        googleMaps: {
            apiKey: "AIzaSyAdMYZIrkFpeODvZTeM1xHeAKzTE0XBdbg"
          }
      },
      permissions: [
        'CAMERA',
        'READ_EXTERNAL_STORAGE',
        'WRITE_EXTERNAL_STORAGE',
      ],
    },
    runtimeVersion:  "exposdk:49.0.0",
    extra:{
      eas: {
        projectId: 'bdc871e7-68eb-436d-890c-83e3bc26ac2f'
      },
    },
    owner: 'ntaboada'
  },
};
