## imagemin-sharp

### only works on unix. no windows version of sharp exists.
use [sharp](https://github.com/lovell/sharp) to resize images.

if you need to resize images on all operating systems have a look at:
[imagemin-jimp](https://github.com/jaeh/imagemin-jimp)

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]

### install
```js
!!! DOES NOT WORK ON WINDOWS !!!
npm install --save imagemin-sharp
```

### usage
```js
const sharpOptions = {
  width: 500,
  height: 500,
  // config will be used as the sharp options object,
  // see https://sharp.pixelplumbing.com/en/stable/api-constructor/
  config: {
    withoutEnlargement: true
  },
}

imagemin(input, output, {
  plugins: [
    imageminSharp(sharpOptions),
  ],
})
```

[npm-image]: https://img.shields.io/npm/v/jaeh/imagemin-sharp.svg
[npm-url]: https://www.npmjs.com/package/jaeh/imagemin-sharp
[travis-image]: https://api.travis-ci.org/jaeh/imagemin-sharp.svg?branch=master
[travis-url]: https://travis-ci.org/jaeh/imagemin-sharp
[appveyor-image]: https://img.shields.io/appveyor/ci/jaeh/imagemin-sharp/master.svg
[appveyor-url]: https://ci.appveyor.com/project/jaeh/imagemin-sharp/branch/master
[coveralls-image]: https://coveralls.io/repos/github/jaeh/imagemin-sharp/badge.svg
[coveralls-url]: https://coveralls.io/github/jaeh/imagemin-sharp
[greenkeeper-image]: https://badges.greenkeeper.io/jaeh/imagemin-sharp.svg
[greenkeeper-url]: https://greenkeeper.io