const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            'scss@': path.resolve('resources/assets/client/sass'),
            '@': path.resolve('resources/assets/client/js'),
            'scss*': path.resolve('resources/assets/client/sass'),
            '*': path.resolve('resources/assets/client/js'),
            'public': path.resolve('public'),
        },
    },
})

mix.js('resources/assets/client/js/app.js', 'public/client/js')
    .sass('resources/assets/client/sass/app.scss', 'public/client/css');
// Framework 7
mix.copy('node_modules/framework7/css/framework7.bundle.min.css', 'public/client/css/fw7/framework7.bundle.min.css');

mix.version();

mix.disableNotifications();