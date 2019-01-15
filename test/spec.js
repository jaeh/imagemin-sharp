const fs = require('fs')
const path = require('path')

const { is, tryCatch } = require('@magic/test')
const imageminSharp = require('../src/index.js')

const imageFilePath = path.join(__dirname, '.fixtures', 'magic.png')
const originalImageBuffer = fs.readFileSync(imageFilePath)

const options = { width: 50, height: 50 }

module.exports = [
  {
    fn: () => imageminSharp(options)(originalImageBuffer),
    expect: is.buffer,
    info: 'imagemin returns an object',
  },
  {
    fn: () => imageminSharp(options)(originalImageBuffer),
    expect: res => res.length < originalImageBuffer.length,
    info: 'buffer length is smaller for smaller images',
  },
  {
    fn: tryCatch(() => imageminSharp({ width: 0, height: 0 })(undefined)),
    expect: is.error,
    info: 'calling imageminSharp without buffer rejects',
  },
  {
    fn: tryCatch(() => imageminSharp({ width: 0, height: 0 })(undefined)),
    expect: e => e.stack.startsWith('TypeError: Expected a buffer'),
    info: 'calling imageminSharp without buffer rejects',
  },
]
