/**
 * Created by stevenbraham on 22-03-17.
 */
var elixir = require('laravel-elixir');
require('laravel-elixir-vue-2');
require('laravel-elixir-vueify');
elixir.config.assetsPath = 'source';
elixir.config.publicPath = 'build';
elixir.config.viewPath = './';

elixir((mix) => {
    mix.webpack('app.js');
    mix.copy('source/images', 'build/images');
    mix.copy('source/images', 'build/images');
    mix.copy('source/index.html', 'build/index.html');
    mix.sass('style.scss');
});