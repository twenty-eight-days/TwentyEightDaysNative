# TwentyEightDays <img style="margin: auto" src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.jpg" height=20px>

Privacy-First Cycle Tracking App (React Native, iOS/Android).

<div style="display: flex">
    <img style="margin: auto" src="https://github.com/twenty-eight-days/TwentyEightDaysNative/blob/main/screenshot_1.png?raw=true" height=500px>
    <img style="margin: auto" src="https://github.com/twenty-eight-days/TwentyEightDaysNative/blob/main/screenshot_2.png?raw=true" height=500px>
</div>

## Development

### Project Setup

Based on a vanilla (_no_ Expo) setup, initialized via https://github.com/react-native-community/react-native-template-typescript[react-native-template-typescript].

### Installing Dependencies

Run the following commands after cloning this repo (first-time only):

```sh
yarn install
```

for Mac

```sh
cd ios
pod install
```

### Running the Project

Pre-Requisites: OS-specific simulators (see https://reactnative.dev/docs/environment-setup[React Native Docs] for instructions).

To run the app on the simulator or device:

```sh
yarn ios
```

or

```sh
yarn android
```

Advanced Android Setup if Emulator is not found by react-native

```sh
export ANDROID_HOME=~/.android
export PATH=$PATH:$ANDROID_HOME/platform-tools:$ANDROID_HOME/tools
npx react-native start & npx react-native run-android
```

### Architecture

This project is using an MVC (Model View, Controller) Structure with functional
patterns. Using mostly React Hooks and Redux Hooks.

```
TwentyEightDaysNative
│   .husky               (Running Pre commit scripts test and validation)
│   ios                  (IOS Project from React Native)
│   android              (Android Project from React Native)
│   package.json
│   yarn.json
└───src
│   └───controller       (Main calculations and redux store)
│   └───model            (Secure Data Modeling and writing to Disk)
│   └───view             (Visual Logic, what the user sees)
│   │   └───components   (Simple self containing UI like buttons)
│   │   └───containers   (Takes and wraps around components)
│   │   └───ressources   (Pictures)
│   └───tests            (Main Folder for tests #jest)
```

It also utilizes Redux-Toolkit as its main way of managing the State of the App.

### Quality Assurance

#### On Commit

On every commit, changes are auto-formatted via https://prettier.io[Prettier].
If ESLint reports any errors, the commit is rejected.

To force a commit in defiance of these rules, use `git commit --no-verify`.
(not recommended)

#### On Push

On every push, GitHub CI compiles all code and runs all test.

## Legal

&copy; 2021 Rahel Lüthy, Marcos Gamez, Jessica Hofmann

MIT License
