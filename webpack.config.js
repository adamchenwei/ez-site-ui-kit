// const HtmlWebpackPlugin = require('html-webpack-plugin');
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { DefinePlugin } from 'webpack';
import { path } from 'path';

const Defined = new DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('production')
});


const SOURCE_DIR = './src';
// const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
//   template: SOURCE_DIR + '/index.html',
//   filename: 'index.html',
//   inject: 'body'
// });

module.exports = (env) => {
  /* eslint-disable */
  console.log(`Environment Configs: ${JSON.stringify(env) || 'Default'}`);
  console.log(`
  Available Configs:
  --env.watch = true / false //for allow webpack to watch build
  `)
  /* eslint-enable */
  const environment = env || {};
  const {
    watch,
    analyze,
  } = environment;

  const configedAnalyzer = new BundleAnalyzerPlugin({
    // Can be `server`, `static` or `disabled`.
    // In `server` mode analyzer will start HTTP server to show bundle report.
    // In `static` mode single HTML file with bundle report will be generated.
    // In `disabled` mode you can use this plugin to just generate Webpack Stats JSON file by setting `generateStatsFile` to `true`.
    analyzerMode: 'static',
    // Host that will be used in `server` mode to start HTTP server.
    analyzerHost: '127.0.0.1',
    // Port that will be used in `server` mode to start HTTP server.
    analyzerPort: 8888,
    // Path to bundle report file that will be generated in `static` mode.
    // Relative to bundles output directory.
    reportFilename: './../report/bundle_anlaysis.html',
    // Module sizes to show in report by default.
    // Should be one of `stat`, `parsed` or `gzip`.
    // See "Definitions" section for more information.
    defaultSizes: 'gzip',
    // Automatically open report in default browser
    openAnalyzer: Boolean(analyze),
    // If `true`, Webpack Stats JSON file will be generated in bundles output directory
    generateStatsFile: Boolean(analyze),
    // Name of Webpack Stats JSON file that will be generated if `generateStatsFile` is `true`.
    // Relative to bundles output directory.
    statsFilename: 'stats.json',
    // Options for `stats.toJson()` method.
    // For example you can exclude sources of your modules
    // from stats file with `source: false` option.
    // See more options here: https://github.com/webpack/webpack/blob/webpack-1/lib/Stats.js#L21
    statsOptions: null,
    // Log level. Can be 'info', 'warn', 'error' or 'silent'.
    logLevel: 'info',
  });

  return {
    entry: `${SOURCE_DIR}/index.js`,
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js',
      libraryTarget: 'commonjs',
    },
    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
        { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ }
      ],
    },
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
    },
    watch: Boolean(watch),
    plugins: [Defined, configedAnalyzer],
    // plugins: [HtmlWebpackPluginConfig]
    externals: {
      react: 'react',
      reactstrap: 'reactstrap',
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
        umd: 'react-dom',
      },
      axios: {
        root: 'axios',
        commonjs2: 'axios',
        commonjs: 'axios',
        amd: 'axios',
        umd: 'axios',
      },
      'styled-components': {
        root: 'styled-components',
        commonjs2: 'styled-components',
        commonjs: 'styled-components',
        amd: 'styled-components',
        umd: 'styled-components',
      },
      'react-share': {
        root: 'react-share',
        commonjs2: 'react-share',
        commonjs: 'react-share',
        amd: 'react-share',
        umd: 'react-share',
      },
      'react-html-parser': {
        root: 'react-html-parser',
        commonjs2: 'react-html-parser',
        commonjs: 'react-html-parser',
        amd: 'react-html-parser',
        umd: 'react-html-parser',
      },
      'react-images': {
        root: 'react-images',
        commonjs2: 'react-images',
        commonjs: 'react-images',
        amd: 'react-images',
        umd: 'react-images',
      },
      'react-transition-group': {
        root: 'react-transition-group',
        commonjs2: 'react-transition-group',
        commonjs: 'react-transition-group',
        amd: 'react-transition-group',
        umd: 'react-transition-group',
      },
      lodash: {
        root: 'lodash',
        commonjs2: 'lodash',
        commonjs: 'lodash',
        amd: 'lodash',
        umd: 'lodash',
      },
      'react-router': {
        root: 'react-router',
        commonjs2: 'react-router',
        commonjs: 'react-router',
        amd: 'react-router',
        umd: 'react-router',
      },
      'material-ui': {
        root: 'material-ui',
        commonjs2: 'material-ui',
        commonjs: 'material-ui',
        amd: 'material-ui',
        umd: 'material-ui',
      },
    },
  };
}
