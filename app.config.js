export default {
  expo: {
    name: "BeeSafe",
    slug: "beesafe",
    version: "1.0.0",
    icon: "./assets/icon.png",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    ios: {
      bundleIdentifier: 'com.beesafe.mobile',
    },
    android: {
      package: 'com.beesafe.mobile',
      adaptiveIcon: {
        foregroundImage: './assets/favicon.png',
        backgroundColor: "#ffffff",
      },
    },
    extra:{
      eas: {
        projectId: 'bdc871e7-68eb-436d-890c-83e3bc26ac2f'
      },
    },
    owner: 'ntaboada'
  },
};
