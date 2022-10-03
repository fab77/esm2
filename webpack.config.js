import webpack from "webpack";
import path from 'path';
import { fileURLToPath } from 'url';
import nodeExternals from 'webpack-node-externals';

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const PATHS = {
  entryPoint: path.resolve(__dirname, 'src/index.ts'),
  bundles: path.resolve(__dirname, '_bundles'),
}

var config = {
  entry: {
    'esm2': [PATHS.entryPoint],
    'esm2.min': [PATHS.entryPoint]
  },
  target: 'web',
  // externals: [
  //   nodeExternals({
  //     importType: 'umd'
  //   })
  // ],
  externals: { 
    "node:fs": "{}",
    "node:zlib": "{}",
    "node:util": "{}",
    "node:url": "{}",
    "node:stream": "{}",
    "node:stream/web": "{}",
    "node:process": "{}",
    "node:path": "{}",
    "node:net": "{}",
    "node:http": "{}",
    "node:https": "{}",
    "node:buffer": "{}",
    // "esm1": require.resolve('esm1')
  },
  externalsType: 'umd',
  output: {
    path: PATHS.bundles,
    // filename: '[name].js',
    libraryTarget: 'umd',
    library: 'esm2',
    umdNamedDefine: true
  },
  resolve: {
    symlinks: true,
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
      "buffer": false,
    },
  },
  devtool: 'inline-source-map',
  plugins: [
    // new webpack.ProvidePlugin({
    //   process: "process/browser",
    //   Buffer: ["buffer", "Buffer"],
    // }),
    // new webpack.ProvidePlugin({
    //   "esm1": "esm1",
    //   esm1: "esm1",
    //   "window.esm1": "esm1"
    // }),
   
  ],
  module: {
    rules: [{
        test: /\.(ts|tsx)$/i,
        use: 'ts-loader',
        exclude: ["/node_modules/"],

      }, {
        test: /\.ts/,
        resolve: {
          fullySpecified: false
        }
      },
    ],


  },
  
}

export default config;