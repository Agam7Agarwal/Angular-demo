var path = require('path');

module.exports = {
    entry : './index.js',
    output : {
        path : __dirname + '/dist',
        filename: 'bundle.js',
    },
    devServer : {
        contentBase : path.join( __dirname , '/'),
        port: 8000,
        historyApiFallback: true,
    },
    target : "web",
    module : {
        loaders : [
            {
                test : /\.js$/,
                use : 'babel-loader'
            },
            {
                test : /\.scss$/,
                use : ["style-loader","css-loader","sass-loader"]
            }
        ]
    }
    
};