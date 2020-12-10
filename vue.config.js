module.exports = {
    devServer: {
        proxy:{
            '/ajax':{
                target:'https://maoyan.com',
                changeOrigin:true
            }
        }
    }
}