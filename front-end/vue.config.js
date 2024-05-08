const path = require('path');

function resolve(dir) {
    return path.join(__dirname,dir)
}

module.exports = {
    chainWebpack:(config)=>{
        config.resolve.alias
        .set('@',resolve('./src'))
    },
    pwa: {
        iconPaths: {
            favicon32: 'favicon.ico',
            favicon16: 'favicon.ico',
            appleTouchIcon: 'favicon.ico',
            maskIcon: 'favicon.ico',
            msTileImage: 'favicon.ico'
        }
    }
};