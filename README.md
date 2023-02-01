# next-gpid
> Get picture uid from url.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-gpid
```

## usage
```js
import '@jswork/next-gpid';

const url = 'http://upload-images.jianshu.io/upload_images/2110669-31cb0672f7e2c467.png';
const pid = nx.gpid(url);
// 2110669-31cb0672f7e2c467
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-gpid/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-gpid
[version-url]: https://npmjs.org/package/@jswork/next-gpid

[license-image]: https://img.shields.io/npm/l/@jswork/next-gpid
[license-url]: https://github.com/afeiship/next-gpid/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-gpid
[size-url]: https://github.com/afeiship/next-gpid/blob/master/dist/next-gpid.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-gpid
[download-url]: https://www.npmjs.com/package/@jswork/next-gpid
