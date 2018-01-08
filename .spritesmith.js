'use strict';

let util = require('util');
let bannerPath = 'banner-name-300x250';

module.exports = {
  src: `./${bannerPath}/src/spritesheet/**/*.png`,
  destImage: `./${bannerPath}/dist/spritesheet.png`,
  destCSS: `./${bannerPath}/src/_spritesheet.scss`,
  imgPath: 'spritesheet.png',
  padding: 2,
  algorithm: 'top-down',
  algorithmOpts: { sort: false },
  cssOpts: {
    cssClass: function (item) {
      return util.format('.banner-name-%s', item.name);
    }
  }
};