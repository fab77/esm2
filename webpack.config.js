import webpack from "webpack";
import path from 'path';
import {fileURLToPath} from 'url';
// import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';
import nodeExternals from 'webpack-node-externals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PATHS = {
  entryPoint: path.resolve(__dirname, 'src/index.ts'),
  bundles: path.resolve(__dirname, '_bundles'),
}

var config = {
  // These are the entry point of our library. We tell webpack to use
  // the name we assign later, when creating the bundle. We also use
  // the name to filter the second entry point for applying code
  // minification via UglifyJS
  entry: {
    'my-lib': [PATHS.entryPoint],
    'my-lib.min': [PATHS.entryPoint]
  },
  target: 'web',
  externals: nodeExternals({
    importType: 'umd'
 }),
  // The output defines how and where we want the bundles. The special
  // value `[name]` in `filename` tell Webpack to use the name we defined above.
  // We target a UMD and name it MyLib. When including the bundle in the browser
  // it will be accessible at `window.MyLib`
  output: {
    path: PATHS.bundles,
    // filename: '[name].js',
    libraryTarget: 'umd',
    library: 'MyEsm2',
    umdNamedDefine: true
  },
  // Add resolve for `tsx` and `ts` files, otherwise Webpack would
  // only look for common JavaScript file extension (.js)
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    extensionAlias: {
      '.js': ['.ts', '.js'],
      '.mjs': ['.mts', '.mjs']
    },
    fallback: {
      "fs": false,
      "tls": false,
      "net": false,
      "path": false,
      "zlib": false,
      "http": false,
      "https": false,
      "stream": false,
      "crypto": false,
      "url": false,
      "util": false,
      "buffer": false
    },
  },
  // Activate source maps for the bundles in order to preserve the original
  // source when the user debugs the application
  devtool: 'source-map',
  plugins: [
    // Apply minification only on the second bundle by
    // using a RegEx on the name, which must end with `.min.js`
    // NB: Remember to activate sourceMaps in UglifyJsPlugin
    // since they are disabled by default!
    // new webpack.optimize.UglifyJsPlugin({
    //   minimize: true,
    //   sourceMap: true,
    //   include: /\.min\.js$/,
    // })
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
  module: {
    // Webpack doesn't understand TypeScript files and a loader is needed.
    // `node_modules` folder is excluded in order to prevent problems with
    // the library dependencies, as well as `__tests__` folders that
    // contain the tests for the library
    
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        use: 'ts-loader',
        exclude: ["/node_modules/"],
        
      },{
        test: /\.ts/,
        resolve: {
            fullySpecified: false
        }
      },
    ],
      
    
  },
  // target: 'node'
}

export default config;