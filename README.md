# hierarchical-tree


## Prerequisites

The following programs should be installed on your machine:

- [Node](https://nodejs.org) (version 14.15.0 or newer)
- [Yarn](https://yarnpkg.com)

You should also note that you will in some cases need:

- [XCode](https://developer.apple.com/xcode/) (for iOS development)
  
- [Android Studio](https://developer.android.com/studio) (for Android development)

## Setting up

First clone the repository.

Run `yarn install` or `npm install` to install the dependencies used in this project.

We use [CocoaPods](https://cocoapods.org/) for installing native iOS libraries:

```
cd ios
pod install
```

In some cases, where the Cocoa Pods aren't working, use this command:

`pod deintegrate`

Then return to the `ios` folder and try to `pod install` again.

## Start up

**Start server:**

```elixir
yarn start-server # or npm run start-server
```

This will start up the development server on your local environment, either in Android Studio _(Android)_ or in XCode _(iOS)_. This process requires that you press the "play"-button in either Android Studio or XCode.

---

**Run device simulators:**

 `yarn run start`

```elixir
npx react-native run-ios
#or
npx react-native run-android
```



