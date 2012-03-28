require([
    '../src/holo.js',
    '../src/utils.js'], function ( Holo, Utils ) {
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

    generateDummyComponents( 1000 );

    Holo.initialize();

    trace( 'Executing test case DONE.' );

});
