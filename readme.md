# is-avi [![Build Status](https://travis-ci.org/arthurvr/is-avi.svg?branch=master)](https://travis-ci.org/arthurvr/is-avi)

> Check if a buffer/Uint8Array is an AVI file


## Install

```
$ npm install --save is-avi
```


## Usage

```js
const isAvi = require('is-avi');
const read = require('fs').readFileSync;

isAvi(read('foo.avi'));
//=> true
```


## License

MIT © [Arthur Verschaeve](http://arthurverschaeve.be)
