// requirejs configuration
require.config({
    baseUrl: '../src/',
    paths: {
        order: 'lib/order',
        jquery: 'lib/jquery/jquery-1.7.2.min',

        _underscore: 'lib/underscore/underscore-min',
        underscore: 'lib/underscore/underscore_wrapper',

        utils: 'lib/utils'
    }

});

define(
    [
        'order!jquery',
        'order!underscore',
        'utils'
    ],

    function($, _, Utils){

        return {

            initialize: function() {

                Utils.trace( 'Holo is initializing' );

            }

        };

    }
);