const webpack = require('webpack');
const path = require('path');

module.exports = {    
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve = {
        ...webpackConfig.resolve,
        fallback: {
          ...webpackConfig.resolve.fallback,
          fs: false,               // Disable 'fs' module which isn't needed in the browser
          path: require.resolve('path-browserify'), // Polyfill for 'path'
          buffer: require.resolve('buffer/'),       // Polyfill for 'buffer'
          assert: require.resolve('assert/'),       // Polyfill for 'assert'
          crypto: require.resolve('crypto-browserify'), // Polyfill for 'crypto'
          stream: require.resolve('stream-browserify'), // Polyfill for 'stream'
          util: require.resolve('util/'),           // Polyfill for 'util'
          url: require.resolve('url'),             // Polyfill for 'url'
          buffer: require.resolve('buffer/'),
        },
      };

      webpackConfig.plugins = [
        ...(webpackConfig.plugins || []),
        new webpack.ProvidePlugin({
          Buffer: ['buffer', 'Buffer'],
        }),
      ];
      
      // Suppress specific source map warnings
      webpackConfig.ignoreWarnings = [
        (warning) =>
          typeof warning.message === 'string' &&
          warning.message.includes('Failed to parse source map'),
      ];

      return webpackConfig;
    },
  },
  babel: {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react'
    ],
    plugins: [
      // Add other plugins needed here if necessary
    ],
  },
};