# 28 Days Native App

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
cd ios
pod install
```

### Development

Pre-Requisites: OS-specific simulators (see https://reactnative.dev/docs/environment-setup[React Native Docs] for instructions).

To run the app on the simulator:

```sh
yarn ios
```

or

```sh
yarn android
```

### Quality Assurance

#### On Commit

On every commit, changes are auto-formatted via https://prettier.io[Prettier].
If ESLint reports any errors, the commit is rejected.

To force a commit in defiance of these rules, use `git commit --no-verify`.

#### On Push

On every push, GitHub CI compiles all code and runs all test.

&copy; Rahel Lüthy 2021 – link:LICENSE[MIT License]
