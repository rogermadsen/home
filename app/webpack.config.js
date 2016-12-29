const path = require('path');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');

//var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
//var APP_DIR = path.resolve(__dirname, 'src/client/app');

module.exports = {
    entry: './index.jsx',
    output: {
        filename: 'bundle.js', //this is the default name, so you can skip it
        //path: '../public',
        //at this directory our bundle file will be available
        //make sure port 8090 is used when launching webpack-dev-server
        publicPath: 'http://localhost:8090/assets'
    },
    module: {
        loaders: [
            /*
            {
                //tell webpack to use jsx-loader for all *.jsx files
                test: /\.jsx$/,
                loader: 'jsx-loader?insertPragma=React.DOM&harmony',
                exclude: [nodeModulesPath],
            }*/
            {
                test : /\.jsx?/,
                loader : 'babel',
                exclude: [nodeModulesPath]
            }
        ]
    },
    externals: {
        //don't bundle the 'react' npm package with our bundle.js
        //but get it from a global 'React' variable
        //'react': 'React',
        //'reactDOM': 'ReactDOM'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}
