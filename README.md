# Stryker Async App

A simple project created to run tests with async values.

## Description

The project has created for this [issue 3580](https://github.com/stryker-mutator/stryker-js/issues/3580). 
Contains two components/tests:
- The [Title](https://github.com/ehcorrea/stryker-async-app/tree/main/src/components/Title) test 
was created with [React Native Animated](https://reactnative.dev/docs/animated) to do the width **transition** value
- The [Subtitle](https://github.com/ehcorrea/stryker-async-app/tree/main/src/components/Subtitle) test 
was created with [setTimeout](https://www.w3schools.com/jsref/met_win_settimeout.asp) to **set** width value

Both async tests **pass** using jest, but **fail** when running in a stryker sandbox



## Getting Started

### Dependencies

* [Jest](https://jestjs.io/pt-BR/)
* [Jest Styled Components](https://github.com/styled-components/jest-styled-components)
* [Babel Jest](https://www.npmjs.com/package/babel-jest)
* [Testing Library React Native](https://testing-library.com/docs/react-native-testing-library/intro/)
* [Testing Library Jest Native](https://testing-library.com/docs/ecosystem-jest-native/)
* [Stryker for React](https://stryker-mutator.io/docs/stryker-js/guides/react/)

### Installing Dependencies

* Install dependencies using yarn 
```
yarn
```

### Executing Tests

* To run tests
```
yarn test
```
* To run stryker(Will fail)
```
yarn stryker run
```

### Workaround Suggested by [nicojs](https://github.com/nicojs) in [issue 3580](https://github.com/stryker-mutator/stryker-js/issues/3580)

* To run stryker
```
NODE_ENV=test yarn stryker run
```
* Or to support windows:
```
cross-env NODE_ENV=test npx stryker run --checkers "" --concurrency 2
```



