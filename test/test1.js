/*global window, navigator, document, importScripts, jQuery, setTimeout, opera */

require.config({
    baseUrl: '../src/',
    paths: {
        utils: 'lib/utils'
    }

});

require([
    'holo',
    'utils'
], function ( Holo, Utils ) {
    "use strict";

    window.DEBUG = true;

    // shorthand
    var trace = Utils.trace;

    trace('Executing test case 1...');

    var generateDummyComponents = function( count ) {

        var i;

        for ( i=0; i<count; i++ ) {
            trace( i );
        }

    };

    generateDummyComponents( 10 );

    Holo.initialize();

    trace( 'Executing test case DONE.' );

});
