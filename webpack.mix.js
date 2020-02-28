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

mix.copyDirectory([
    'node_modules/swagger-ui-dist/swagger-ui-bundle.js',
    'node_modules/swagger-ui-dist/swagger-ui.css',
        'node_modules/swagger-ui-dist/favicon-32x32.png',
    'node_modules/swagger-ui-dist/favicon-16x16.png',
    'node_modules/swagger-ui-dist/swagger-ui-standalone-preset.js',
    'node_modules/swagger-ui-dist/swagger-ui-standalone-preset.js.map',
    'node_modules/swagger-ui-dist/swagger-ui.css.map',
        'node_modules/swagger-ui-dist/swagger-ui-bundle.js.map',
   ], 'public/swagger');

mix.version();

mix.disableNotifications();