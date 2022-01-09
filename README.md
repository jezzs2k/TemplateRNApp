# Template RNApp

## Environments

The following table explains the branches for different environments of stampa-paese
| Branch Name | Purpose |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| develop | This is where features are approved and reviewed here before being selected to go into the release branch a few days before a regular release. |
| master | Production environment. |

## Setup

Follow guide on [Enviroment Setup](https://reactnative.dev/docs/environment-setup) on React Native documents

## Running project locally

Source: https://reactnative.dev/docs/environment-setup#running-your-react-native-application

### Step 1: Start Metro

To start Metro in the dev profile, simply run `yarn start`
Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the --reset-cache flag to the start script:

```
npm start -- --reset-cache
# or
yarn start -- --reset-cache
```

### Step 2: Start your application

**Start app on IOS**

```
yarn ios
```

**Start app on Android**

```
yarn android
```

## Build project to APK file

Follow this guide: https://reactnative.dev/docs/signed-apk-android

**Export APK file**

```
npx react-native run-android --variant=release
# or
cd android && ./gradlew assembleRelease
```

## Lints and fixes files

```
yarn lint
```
