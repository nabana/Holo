// requirejs configuration
require.config({
    paths: {
        order: '../src/order',
        jquery: '../src/libs/jquery/jquery-1.7.2.min',

        _underscore: '../src/libs/underscore/underscore-min',
        underscore: '../src/libs/underscore/underscore_wrapper',

        utils: '../src/utils'
    }

});

define([
    'order!jquery',
    'order!underscore',
    'order!utils'
], function($, _, Utils){

    return {

        initialize: function() {

            Utils.trace( 'Holo is initializing' );

        }

    };

});