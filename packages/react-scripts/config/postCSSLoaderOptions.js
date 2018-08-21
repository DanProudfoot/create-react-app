'use strict';

const pxtorem = require('postcss-pxtorem');
const cssMqpacker = require('css-mqpacker');
const presetEnv = require('postcss-preset-env');

const remRoot = Number(process.env.REM_ROOT_VALUE) || 16;

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
    // Converts pixels to rem.
    pxtorem({
      rootValue: remRoot,
      unitPrecision: 3,
      propList: ['*'],
    }),
    // preset-env fixes lots of browser support bugs
    presetEnv({
      autoprefixer: { flexbox: 'no-2009', grid: true },
    }),
    // Merge all Media Queries together
    cssMqpacker(),
  ],
};

module.exports = postCSSLoaderOptions;
