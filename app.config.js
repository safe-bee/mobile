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
    ios: {
      bundleIdentifier: 'com.beesafe.mobile',
      infoPlist: {
        CFBundleAllowMixedLocalizations: true,
      },
    },
    android: {
      package: 'com.beesafe.mobile',
      adaptiveIcon: {
        foregroundImage: './assets/favicon.png',
        backgroundColor: "#ffffff",
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
