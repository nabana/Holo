/**
 * A set if Utility functions
 *
 * @author Naba
 */

define([
    'underscore'
], function( _ ){
    "use strict";

    var console = window.console;


    /**
     *    Traces a msg on the console if available
     */
    var trace = function (msg, mode) {

        var today = new Date(),
            h = today.getHours(),
            m = today.getMinutes(),
            s = today.getSeconds(),
            ms = today.getMilliseconds(),
            messageString = '[' + h + ':' + m + ':' + s + '.' + ms + '] ' + msg;

        if ( window.DEBUG === true ) {
            if ( console ) {

                if (mode == 'error' && _.isFunction(console.error)) {
                    console.error(messageString);
                } else if (_.isFunction(console.log)) {
                    console.log(messageString);
                }
            }
        }

    };

    return {

        trace: trace

    };

});
