'use strict';

const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const cssMqpacker = require('css-mqpacker');
const easyMediaQuery = require('postcss-easy-media-query');
const lineHeight = require('postcss-line-height-px-to-unitless');
const letterTracking = require('postcss-letter-tracking');

// Options for PostCSS as we reference these options twice
// Adds vendor prefixing based on your specified browser support in
// package.json
const postCSSLoaderOptions = {
  // Necessary for external CSS imports to work
  // https://github.com/facebook/create-react-app/issues/2677
  ident: 'postcss',
  sourceMap: true,
  plugins: () => [
    require('postcss-flexbugs-fixes'),
    pxtorem({
      rootValue: 16,
      unitPrecision: 3,
      propList: ['*'],
    }),
    cssMqpacker(),
    easyMediaQuery(),
    lineHeight(),
    letterTracking(),
    autoprefixer({
      flexbox: 'no-2009',
    }),
  ],
};

module.exports = postCSSLoaderOptions;
