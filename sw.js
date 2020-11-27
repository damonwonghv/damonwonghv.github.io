importScripts("precache-manifest.e4a790353ce51da086676d61093eb05c.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

// Inside of webpack.config.js:
/*
const {GenerateSW} = require('workbox-webpack-plugin');

module.exports = {
  // Other webpack config...
  plugins: [
    // Other plugins...
    new GenerateSW({
      option: 'value',
    })
  ]
};
*/
// TODO: Install workBox-build from a command prompt
// TODO:   npm install workbox-build
const workboxBuild = require('workbox-build');
const SRC_DIR = 'src';
const BUILD_DIR = '{1:dist}';
const SW = 'sw.js';

const input ={
  swSrc: `${SRC_DIR}/${SW}`,
  swDest: `${BUILD_DIR}/${SW}`,
  globDirectory: BUILD_DIR,
  globPatterns: [
    '**/*.{js,png,ico,svg,html,css}',
    'assets/**/*'
  ],
  globIgnores: ['sw.js'],
  maximumFileSizeToCacheInBytes: 4000000
};

workboxBuild.injectManifest(input).then(() =>{
  console.log(`The service worker ${BUILD_DIR}/${SW} has been injected with a precache list.`);
});

