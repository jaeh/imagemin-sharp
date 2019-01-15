## imagemin-sharp

### only works on unix. no windows version exists.
use [sharp](https://github.com/lovell/sharp) to resize images.


[![Linux Build Status][travis-image]][travis-url]

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

[travis-image]: https://img.shields.io/travis/jaeh/imagemin-sharp/master.svg?label=Linux%20build
[travis-url]: https://travis-ci.org/jaeh/imagemin-sharp
