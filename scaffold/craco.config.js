const CracoAntDesignPlugin = require("craco-antd");
const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {'@primary-color': '#bfa'},
                        javascriptEnabled: true,
                    },
                },
            },
        },
        {
            plugin: CracoAntDesignPlugin
        },
    ],
};